import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { ResumeService, type ResumeFormat } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get('themes')
  @HttpCode(HttpStatus.OK)
  getThemes(): string[] {
    return this.resumeService.listAvailableThemes();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createResume(
    @Body() resume: Record<string, unknown>,
    @Query('format') format: string | undefined,
    @Query('theme') theme: string | undefined,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const sanitizedFormat = (format ?? 'html')
      .replace(/"/g, '')
      .trim()
      .toLowerCase();

    const supportedFormats = new Set(['html', 'pdf']);

    if (!supportedFormats.has(sanitizedFormat)) {
      throw new BadRequestException(
        'Unsupported resume format. Use format=html or format=pdf.',
      );
    }

    const sanitizedTheme = theme
      ? theme.replace(/"/g, '').trim().toLowerCase()
      : undefined;

    if (!resume || typeof resume !== 'object' || Array.isArray(resume)) {
      throw new BadRequestException('Resume payload must be a JSON object.');
    }

    if (sanitizedFormat === 'html') {
      const { html, theme: resolvedTheme } =
        await this.resumeService.renderResumeHtml(resume, sanitizedTheme);

      const { id } = await this.resumeService.persistRenderedResume({
        html,
        resume,
        theme: resolvedTheme,
      });

      reply.header('Content-Type', 'application/json; charset=utf-8').send({
        id,
        theme: resolvedTheme,
        viewUrl: `/resume/${id}`,
        pdfUrl: `/resume/${id}?format=pdf`,
        html,
      });
      return;
    }

    const resumeFormat: ResumeFormat = 'pdf';
    const pdf = await this.resumeService.generatePdf(
      resume,
      resumeFormat,
      sanitizedTheme,
    );

    reply
      .header('Content-Type', 'application/pdf')
      .header(
        'Content-Disposition',
        `inline; filename="resume.${resumeFormat}"`,
      )
      .send(pdf);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getStoredResume(
    @Param('id') id: string,
    @Query('format') format: string | undefined,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const sanitizedFormat = (format ?? 'html')
      .replace(/"/g, '')
      .trim()
      .toLowerCase();

    const supportedFormats = new Set(['html', 'pdf']);

    if (!supportedFormats.has(sanitizedFormat)) {
      throw new BadRequestException(
        'Unsupported resume format. Use format=html or format=pdf.',
      );
    }

    if (sanitizedFormat === 'html') {
      const html = await this.resumeService.loadPersistedHtml(id);

      reply.header('Content-Type', 'text/html; charset=utf-8').send(html);
      return;
    }

    const pdf = await this.resumeService.generateStoredPdf(id);

    reply
      .header('Content-Type', 'application/pdf')
      .header('Content-Disposition', `inline; filename="resume.pdf"`)
      .send(pdf);
  }
}
