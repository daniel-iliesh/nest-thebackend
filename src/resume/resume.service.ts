import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Validator } from 'jsonschema';
import type { JSONSchema7 } from 'json-schema';
import resumeSchema from '@jsonresume/schema';
import type { Browser, PuppeteerNode } from 'puppeteer';
import { build } from 'esbuild';
import { randomUUID } from 'node:crypto';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';

import {
  RESUME_THEME_REGISTRY,
  ResumeThemeKey,
  DEFAULT_RESUME_THEME,
} from './theme-registry';

export type ResumeFormat = 'pdf';

type ResumePayload = Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-implied-eval
const dynamicImportModule = new Function(
  'specifier',
  'return import(specifier);',
) as <T>(specifier: string) => Promise<T>;

@Injectable()
export class ResumeService {
  private readonly logger = new Logger(ResumeService.name);
  private readonly validator = new Validator();
  private readonly schema = resumeSchema as unknown as JSONSchema7;
  private readonly require = createRequire(__filename);
  private readonly storageRoot = join(process.cwd(), 'storage', 'resumes');
  private readonly bundleCacheRoot = join(
    process.cwd(),
    '.cache',
    'resume-themes',
  );

  private readonly themePromises = new Map<string, Promise<unknown>>();
  private readonly bundledThemeUrls = new Map<string, Promise<string>>();
  private puppeteerPromise?: Promise<PuppeteerNode>;
  private storageDirectoryPromise?: Promise<void>;

  async generatePdf(
    resume: ResumePayload,
    format: ResumeFormat,
    themeKey?: string,
  ): Promise<Buffer> {
    this.ensureFormatSupported(format);
    try {
      this.logger.debug('Starting resume PDF generation workflow.');
      const { html, resolvedThemeKey } = await this.buildResumeHtml(
        resume,
        themeKey,
      );

      this.logger.debug(
        `Rendered resume HTML with theme (${resolvedThemeKey}). Proceeding to PDF conversion.`,
      );
      this.logger.debug(`Generated HTML length: ${html.length}`);
      this.logger.debug(
        `Rendered HTML preview (first 500 chars): ${html.substring(0, 500)}`,
      );
      if (html.includes('&lt;') || html.includes('&gt;')) {
        this.logger.warn(
          'Rendered HTML contains escaped angle brackets (&lt; or &gt;).',
        );
      }

      return await this.printHtmlToPdf(html);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      this.logger.error(
        'Failed to generate the resume PDF',
        error instanceof Error ? error.stack || error.message : String(error),
      );
      throw new InternalServerErrorException(
        'Failed to generate the resume PDF. Please try again later.',
      );
    }
  }

  async generateStoredPdf(id: string): Promise<Buffer> {
    this.ensureValidResumeId(id);
    const { resume, theme } = await this.loadPersistedResumePayload(id);
    return await this.generatePdf(resume, 'pdf', theme);
  }

  async renderResumeHtml(
    resume: ResumePayload,
    themeKey?: string,
  ): Promise<{ html: string; theme: ResumeThemeKey }> {
    const { html, resolvedThemeKey } = await this.buildResumeHtml(
      resume,
      themeKey,
    );

    this.logger.debug(
      `Rendered resume HTML with theme (${resolvedThemeKey}). Generated HTML length: ${html.length}`,
    );

    return {
      html,
      theme: resolvedThemeKey,
    };
  }

  async persistRenderedResume(params: {
    html: string;
    resume: ResumePayload;
    theme: ResumeThemeKey;
  }): Promise<{ id: string; htmlPath: string }> {
    const { html, resume, theme } = params;
    await this.ensureStorageDirectory();
    const id = randomUUID();
    const recordDir = this.resolveRecordDirectory(id);

    await mkdir(recordDir, { recursive: true });

    await Promise.all([
      writeFile(this.resolveHtmlFilePath(id), html, 'utf8'),
      writeFile(
        this.resolveResumeJsonPath(id),
        JSON.stringify(resume, null, 2),
        'utf8',
      ),
      writeFile(
        this.resolveMetadataPath(id),
        JSON.stringify(
          {
            theme,
            createdAt: new Date().toISOString(),
          },
          null,
          2,
        ),
        'utf8',
      ),
    ]);

    return { id, htmlPath: this.resolveHtmlFilePath(id) };
  }

  async loadPersistedHtml(id: string): Promise<string> {
    this.ensureValidResumeId(id);
    try {
      return await readFile(this.resolveHtmlFilePath(id), 'utf8');
    } catch (error) {
      if ((error as NodeJS.ErrnoException)?.code === 'ENOENT') {
        throw new NotFoundException('Rendered resume not found.');
      }

      this.logger.error('Unable to load persisted resume HTML.', error);
      throw new InternalServerErrorException(
        'Failed to load rendered resume from storage.',
      );
    }
  }

  private async loadPersistedResumePayload(id: string): Promise<{
    resume: ResumePayload;
    theme?: ResumeThemeKey;
  }> {
    try {
      const [resumeJson, metadataJson] = await Promise.all([
        readFile(this.resolveResumeJsonPath(id), 'utf8'),
        readFile(this.resolveMetadataPath(id), 'utf8').catch((error) => {
          if ((error as NodeJS.ErrnoException)?.code === 'ENOENT') {
            return undefined;
          }
          throw error;
        }),
      ]);

      const resume = JSON.parse(resumeJson) as ResumePayload;
      const metadata = metadataJson ? JSON.parse(metadataJson) : undefined;

      return {
        resume,
        theme: metadata?.theme,
      };
    } catch (error) {
      if ((error as NodeJS.ErrnoException)?.code === 'ENOENT') {
        throw new NotFoundException('Persisted resume data not found.');
      }

      this.logger.error('Unable to load persisted resume payload.', error);
      throw new InternalServerErrorException(
        'Failed to load persisted resume data.',
      );
    }
  }

  private ensureFormatSupported(format: ResumeFormat): void {
    if (format !== 'pdf') {
      throw new BadRequestException('Unsupported resume format.');
    }
  }

  private ensureValidResume(resume: ResumePayload): void {
    const validation = this.validator.validate(
      resume,
      this.schema as unknown as Record<string, unknown>,
    );

    if (!validation.valid) {
      throw new BadRequestException({
        message: 'Resume validation failed',
        errors: validation.errors.map(
          (error) => `${error.property} ${error.message}`,
        ),
      });
    }
  }

  private async loadTheme(packageName: string): Promise<unknown> {
    if (!this.themePromises.has(packageName)) {
      this.logger.debug(`Loading resume theme module (${packageName}).`);
      const themePromise = this.loadThemeModule(packageName);
      this.themePromises.set(packageName, themePromise);
    }
    return this.themePromises.get(packageName) as Promise<unknown>;
  }

  private async loadThemeModule(packageName: string): Promise<unknown> {
    try {
      // Try ESM import first for themes that support it
      const module = await import(packageName);
      return this.extractDefault<unknown>(module);
    } catch (error) {
      // Fallback to bundling if ESM import fails
      if (this.shouldRetryWithBundledTheme(error)) {
        this.logger.debug(
          `ESM import failed, falling back to bundling resume theme module (${packageName}).`,
        );
        const bundledThemeUrl = await this.getBundledThemeUrl(packageName);
        const module = await dynamicImportModule<unknown>(bundledThemeUrl);
        return this.extractDefault<unknown>(module);
      }

      this.logger.error(
        `Unable to load resume theme module (${packageName}).`,
        error instanceof Error ? error.stack || error.message : String(error),
      );
      throw new InternalServerErrorException(
        'Unable to load resume theme dependency.',
      );
    }
  }

  private async loadPuppeteer(): Promise<PuppeteerNode> {
    if (!this.puppeteerPromise) {
      this.logger.debug('Loading puppeteer module.');
      this.puppeteerPromise = dynamicImportModule<unknown>('puppeteer').then(
        (module) => {
          const resolved = this.extractDefault<unknown>(module);
          if (this.isPuppeteerNode(resolved)) {
            this.logger.debug('Puppeteer module loaded successfully.');
            return resolved;
          }

          throw new InternalServerErrorException(
            'Unable to load puppeteer dependency.',
          );
        },
      );
    }
    return this.puppeteerPromise;
  }

  private isPuppeteerNode(candidate: unknown): candidate is PuppeteerNode {
    return (
      typeof candidate === 'object' &&
      candidate !== null &&
      'launch' in candidate &&
      typeof (candidate as PuppeteerNode).launch === 'function'
    );
  }

  private resolveTheme(
    themeKey: string | undefined,
    resume: ResumePayload,
  ): {
    key: ResumeThemeKey;
    packageName: string;
  } {
    const explicitTheme = this.normalizeThemeKey(themeKey, false);
    const metaTheme = this.normalizeThemeKey(
      this.extractMetaTheme(resume),
      false,
    );
    const candidates = [explicitTheme, metaTheme, DEFAULT_RESUME_THEME].filter(
      (value): value is string => Boolean(value),
    );

    for (const normalizedKey of candidates) {
      const resolvedEntry = Object.entries(RESUME_THEME_REGISTRY).find(
        ([key, config]) =>
          key === normalizedKey ||
          config.aliases?.some(
            (alias) => alias.toLowerCase() === normalizedKey,
          ),
      );

      if (resolvedEntry) {
        const [resolvedKey, config] = resolvedEntry;
        return {
          key: resolvedKey as ResumeThemeKey,
          packageName: config.packageName,
        };
      }
    }

    const availableThemes = Object.keys(RESUME_THEME_REGISTRY).join(', ');
    throw new BadRequestException(
      `Unsupported resume theme "${themeKey ?? metaTheme ?? ''}". Available themes: ${availableThemes}.`,
    );
  }

  private normalizeThemeKey(
    themeKey: string | undefined,
    fallbackToDefault = true,
  ): string | undefined {
    if (themeKey === undefined || themeKey === null) {
      return fallbackToDefault ? DEFAULT_RESUME_THEME : undefined;
    }

    const sanitized = themeKey.replace(/"/g, '').trim().toLowerCase();

    if (!sanitized) {
      return fallbackToDefault ? DEFAULT_RESUME_THEME : undefined;
    }

    return sanitized;
  }

  private extractMetaTheme(resume: ResumePayload): string | undefined {
    const meta = resume?.meta;
    if (meta && typeof meta === 'object') {
      const candidate = (meta as { theme?: unknown }).theme;
      if (typeof candidate === 'string') {
        return candidate;
      }
    }

    return undefined;
  }

  private async buildResumeHtml(
    resume: ResumePayload,
    themeKey?: string,
  ): Promise<{ html: string; resolvedThemeKey: ResumeThemeKey }> {
    this.ensureValidResume(resume);

    const { key: resolvedThemeKey, packageName: themePackageName } =
      this.resolveTheme(themeKey, resume);

    const html = await this.renderResumeWithTheme(resume, themePackageName);

    return {
      html: this.normalizeRenderedHtml(html),
      resolvedThemeKey,
    };
  }

  private ensureValidResumeId(id: string): void {
    if (!/^[0-9a-fA-F-]{36}$/.test(id)) {
      throw new BadRequestException('Invalid resume identifier.');
    }
  }

  private resolveRecordDirectory(id: string): string {
    return join(this.storageRoot, id);
  }

  private resolveHtmlFilePath(id: string): string {
    return join(this.resolveRecordDirectory(id), 'render.html');
  }

  private resolveResumeJsonPath(id: string): string {
    return join(this.resolveRecordDirectory(id), 'resume.json');
  }

  private resolveMetadataPath(id: string): string {
    return join(this.resolveRecordDirectory(id), 'metadata.json');
  }

  private async ensureStorageDirectory(): Promise<void> {
    if (!this.storageDirectoryPromise) {
      this.storageDirectoryPromise = mkdir(this.storageRoot, {
        recursive: true,
      }).then(() => undefined);
    }

    await this.storageDirectoryPromise;
  }

  private async printHtmlToPdf(html: string): Promise<Buffer> {
    let browser: Browser | null = null;

    try {
      const puppeteer = await this.loadPuppeteer();

      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      if (!browser) {
        throw new InternalServerErrorException('Failed to start browser.');
      }

      const page = await browser.newPage();
      this.logger.debug(
        `Setting page content. HTML preview (first 200 chars): ${html.substring(
          0,
          200,
        )}`,
      );
      if (html.includes('&lt;') || html.includes('&gt;')) {
        this.logger.warn(
          'HTML passed to Puppeteer contains escaped angle brackets.',
        );
      }
      await page.setContent(html, { waitUntil: 'networkidle0' });
      const pageContent = await page.content();
      this.logger.debug(
        `Puppeteer page content preview (first 200 chars): ${pageContent.substring(
          0,
          200,
        )}`,
      );
      await page.emulateMediaType('print');

      const pdfBuffer = await page.pdf({
        format: 'a4',
        printBackground: true,
        margin: {
          top: '0.4in',
          right: '0.4in',
          bottom: '0.4in',
          left: '0.4in',
        },
      });
      return Buffer.isBuffer(pdfBuffer) ? pdfBuffer : Buffer.from(pdfBuffer);
    } catch (error) {
      this.logger.error(
        'Failed to print HTML to PDF.',
        error instanceof Error ? error.stack || error.message : String(error),
      );
      throw new InternalServerErrorException(
        'Failed to generate the resume PDF. Please try again later.',
      );
    } finally {
      if (browser) {
        await browser.close().catch((closeError) => {
          this.logger.warn(
            `Unable to close Puppeteer browser cleanly: ${String(closeError)}`,
          );
        });
      }
    }
  }

  private shouldRetryWithBundledTheme(error: unknown): boolean {
    if (error instanceof SyntaxError) {
      return true;
    }

    if (error instanceof Error) {
      const message = error.message.toLowerCase();
      return (
        message.includes('unexpected token') ||
        message.includes('cannot use import statement outside a module') ||
        message.includes('unknown file extension')
      );
    }

    return false;
  }

  private async getBundledThemeUrl(packageName: string): Promise<string> {
    if (!this.bundledThemeUrls.has(packageName)) {
      const bundlePromise = this.bundleThemePackage(packageName);
      this.bundledThemeUrls.set(packageName, bundlePromise);
    }

    return this.bundledThemeUrls.get(packageName) as Promise<string>;
  }

  private async renderResumeWithTheme(
    resume: ResumePayload,
    packageName: string,
  ): Promise<string> {
    try {
      const themeModule = await this.loadTheme(packageName);
      const renderer = this.resolveThemeRenderer(themeModule);
      this.logger.debug(
        `Resolved theme renderer type: ${typeof renderer} (package: ${packageName}).`,
      );

      const html = await renderer(resume);
      this.logger.debug(
        `Theme render output type: ${typeof html}. Preview (first 100 chars): ${
          typeof html === 'string' ? html.substring(0, 100) : '[non-string]'
        }`,
      );

      if (typeof html !== 'string') {
        throw new InternalServerErrorException(
          'Theme renderer did not return HTML string.',
        );
      }

      if (html.includes('&lt;') || html.includes('&gt;')) {
        this.logger.warn(
          `Theme render output contains escaped angle brackets for package ${packageName}.`,
        );
      }

      return this.normalizeRenderedHtml(html);
    } catch (error) {
      this.logger.error(
        `Failed to render resume using theme module (${packageName}).`,
        error instanceof Error ? error.stack || error.message : String(error),
      );
      throw new InternalServerErrorException(
        'Unable to render resume with selected theme.',
      );
    }
  }

  private resolveThemeRenderer(
    module: unknown,
  ): (resume: ResumePayload) => Promise<string> | string {
    if (typeof module === 'function') {
      return module as (resume: ResumePayload) => Promise<string> | string;
    }

    if (module && typeof module === 'object') {
      const candidate = (module as { render?: unknown }).render;
      if (typeof candidate === 'function') {
        return candidate as (resume: ResumePayload) => Promise<string> | string;
      }
    }

    throw new InternalServerErrorException(
      'Loaded resume theme does not expose a render function.',
    );
  }

  private async bundleThemePackage(packageName: string): Promise<string> {
    const entryPoint = this.require.resolve(packageName);
    await mkdir(this.bundleCacheRoot, { recursive: true });
    const tempDirectory = await mkdtemp(join(this.bundleCacheRoot, 'tmp-'));
    const outfile = join(tempDirectory, 'theme.cjs');

    await build({
      entryPoints: [entryPoint],
      bundle: true,
      platform: 'node',
      format: 'cjs',
      target: 'node20',
      outfile,
      sourcemap: false,
      logLevel: 'silent',
      jsx: 'automatic',
      jsxImportSource: 'react',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
      },
      external: [
        'react',
        'react-dom',
        'react-dom/server',
        'react/jsx-runtime',
        'styled-components',
      ],
    });

    await this.patchBundledTheme(outfile);

    return pathToFileURL(outfile).href;
  }

  private async patchBundledTheme(outfile: string): Promise<void> {
    const content = await readFile(outfile, 'utf8');
    let patchedContent = content
      .replace(/new Date\d+/g, 'new Date')
      .replace(/new Date\$/g, 'new Date');

    if (!patchedContent.includes('function __ensureStyledComponentsDefault')) {
      const helper = [
        'function __ensureStyledComponentsDefault(mod) {',
        '  if (!mod) {',
        '    return mod;',
        '  }',
        '  const base = mod.default && typeof mod.default === "function"',
        '    ? mod.default',
        '    : mod.default && mod.default.default && typeof mod.default.default === "function"',
        '      ? mod.default.default',
        '      : null;',
        '  if (base) {',
        '    mod.default = base;',
        '    return Object.assign(base, mod);',
        '  }',
        '  const scoped = require("styled-components");',
        '  const scopedDefault = scoped && typeof scoped.default === "function" ? scoped.default : scoped;',
        '  if (typeof scopedDefault === "function") {',
        '    mod.default = scopedDefault;',
        '    return Object.assign(scopedDefault, mod);',
        '  }',
        '  return mod;',
        '}',
      ].join('\n');

      patchedContent = `${helper}\n${patchedContent}`;
    }

    patchedContent = patchedContent
      .replace(
        /__toESM\(require\("styled-components"\),\s*1\)/g,
        (match) => `__ensureStyledComponentsDefault(${match})`,
      )
      .replace(/require\("styled-components"\)/g, (match, offset, source) => {
        const trimmed = source.slice(0, offset).trimEnd();
        if (
          trimmed.endsWith('__ensureStyledComponentsDefault(') ||
          trimmed.endsWith('__ensureStyledComponentsDefault(__toESM(')
        ) {
          return match;
        }

        return `__ensureStyledComponentsDefault(${match})`;
      });

    if (patchedContent !== content) {
      await writeFile(outfile, patchedContent, 'utf8');
    }
  }

  private extractDefault<T>(module: unknown): T {
    if (
      module &&
      typeof module === 'object' &&
      'default' in (module as Record<string, unknown>) &&
      (module as { default?: unknown }).default !== undefined
    ) {
      this.logger.debug('Resolved module default export.');
      return (module as { default: T }).default;
    }

    if (module !== undefined) {
      this.logger.debug('Module has no default export; using module directly.');
      return module as T;
    }

    throw new InternalServerErrorException(
      'Unable to resolve default export from dynamic import.',
    );
  }

  private normalizeRenderedHtml(html: string): string {
    let normalized = html;

    // Decode common HTML entities if present
    normalized = normalized
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');

    // Ensure protocol-relative URLs load correctly in headless Chromium
    normalized = normalized.replace(/(["'(])\/\/(?!\/)/g, '$1https://');

    // Collapse duplicated paragraph tags produced by themes that wrap prose twice
    normalized = this.collapseDuplicateParagraphs(normalized);

    return normalized;
  }

  private collapseDuplicateParagraphs(html: string): string {
    let current = html;
    let previous: string;
    const blockPrefixPattern =
      /(<(li|div|section|article|td|th)[^>]*>)\s*<p>\s*<p>/gi;
    const blockSuffixPattern =
      /<\/p>\s*<\/p>\s*(<\/(li|div|section|article|td|th)>)/gi;

    do {
      previous = current;
      current = current
        .replace(/<p>\s*<p>/gi, '<p>')
        .replace(/<\/p>\s*<\/p>/gi, '</p>')
        .replace(blockPrefixPattern, '$1<p>')
        .replace(blockSuffixPattern, '</p>$1');
    } while (current !== previous);

    return current;
  }
}
