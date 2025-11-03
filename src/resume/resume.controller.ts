import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { ResumeService, type ResumeFormat } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async createPdf(
    @Body() resume: Record<string, unknown>,
    @Query('format') format: string | undefined,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const sanitizedFormat = (format ?? 'pdf')
      .replace(/"/g, '')
      .trim()
      .toLowerCase();

    if (sanitizedFormat !== 'pdf') {
      throw new BadRequestException(
        'Only PDF resume output is supported. Use format=pdf.',
      );
    }

    if (!resume || typeof resume !== 'object' || Array.isArray(resume)) {
      throw new BadRequestException('Resume payload must be a JSON object.');
    }

    const resumeFormat: ResumeFormat = 'pdf';
    const pdf = await this.resumeService.generatePdf(resume, resumeFormat);

    reply
      .header('Content-Type', 'application/pdf')
      .header(
        'Content-Disposition',
        `inline; filename="resume.${resumeFormat}"`,
      )
      .send(pdf);
  }
}
