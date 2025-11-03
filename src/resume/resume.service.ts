import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Validator } from 'jsonschema';
import type { JSONSchema7 } from 'json-schema';
import resumeSchema from '@jsonresume/schema';
import type { Browser, PuppeteerNode } from 'puppeteer';

export type ResumeFormat = 'pdf';

type ResumePayload = Record<string, unknown>;

type RenderFunction = (
  resume: ResumePayload,
  theme: unknown,
) => Promise<string> | string;
type RenderProvider = { render: RenderFunction };

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

  private renderFnPromise?: Promise<RenderFunction>;
  private themePromise?: Promise<unknown>;
  private puppeteerPromise?: Promise<PuppeteerNode>;

  async generatePdf(
    resume: ResumePayload,
    format: ResumeFormat,
  ): Promise<Buffer> {
    this.ensureFormatSupported(format);
    this.ensureValidResume(resume);

    let browser: Browser | null = null;

    try {
      this.logger.debug('Starting resume PDF generation workflow.');
      const [render, theme, puppeteer] = await Promise.all([
        this.loadRenderFunction(),
        this.loadTheme(),
        this.loadPuppeteer(),
      ]);

      this.logger.debug(
        'Resume renderer, theme, and puppeteer loaded successfully.',
      );
      const html = await render(resume, theme);
      this.logger.debug(`Generated HTML length: ${html.length}`);

      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });

      const pdfBuffer = await page.pdf({ format: 'a4', printBackground: true });
      return Buffer.isBuffer(pdfBuffer) ? pdfBuffer : Buffer.from(pdfBuffer);
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

  private async loadRenderFunction(): Promise<RenderFunction> {
    if (!this.renderFnPromise) {
      this.logger.debug('Loading resume renderer module (resumed).');
      this.renderFnPromise = dynamicImportModule<unknown>('resumed').then(
        (module) => {
          const candidate = this.extractDefault<
            RenderFunction | RenderProvider
          >(module);

          if (this.isRenderFunction(candidate)) {
            return candidate;
          }

          if (this.isRenderProvider(candidate)) {
            this.logger.debug(
              'Resume renderer module exposes a provider with render method.',
            );
            return candidate.render.bind(candidate);
          }

          this.logger.error(
            `Unexpected export shape from resumed module: ${Object.keys(
              candidate as Record<string, unknown>,
            ).join(', ')}`,
          );
          throw new InternalServerErrorException(
            'Unable to load resume renderer dependency.',
          );
        },
      );
    }

    return this.renderFnPromise;
  }

  private async loadTheme(): Promise<unknown> {
    if (!this.themePromise) {
      this.logger.debug('Loading resume theme module (jsonresume-theme-even).');
      this.themePromise = dynamicImportModule<unknown>(
        'jsonresume-theme-even',
      ).then((module) => this.extractDefault<unknown>(module));
    }
    return this.themePromise;
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

  private isRenderFunction(candidate: unknown): candidate is RenderFunction {
    return typeof candidate === 'function';
  }

  private isRenderProvider(candidate: unknown): candidate is RenderProvider {
    return (
      typeof candidate === 'object' &&
      candidate !== null &&
      'render' in candidate &&
      typeof (candidate as RenderProvider).render === 'function'
    );
  }

  private isPuppeteerNode(candidate: unknown): candidate is PuppeteerNode {
    return (
      typeof candidate === 'object' &&
      candidate !== null &&
      'launch' in candidate &&
      typeof (candidate as PuppeteerNode).launch === 'function'
    );
  }
}
