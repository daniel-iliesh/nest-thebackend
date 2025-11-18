import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Resend } from "resend";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import {
  BudgetRangeId,
  HireQuoteDto,
  MailRequestDto,
  ProjectType,
  Timeline,
} from "./dto/hire-quote.dto";

interface SendMailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly resendClient: Resend;
  private readonly mailFrom: string;
  private readonly quoteNotifyTo: string;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>("resend.apiKey");
    const from = this.configService.get<string>("resend.from");
    const notifyTo = this.configService.get<string>("resend.quoteNotifyTo");

    if (!apiKey || !from || !notifyTo) {
      this.logger.warn(
        "Resend configuration is incomplete. Emails will fail until it is configured.",
      );
    }

    this.resendClient = new Resend(apiKey ?? "");
    this.mailFrom = from ?? "";
    this.quoteNotifyTo = notifyTo ?? "";
  }

  async handleMailRequest(rawBody: unknown): Promise<void> {
    const dto = plainToInstance(MailRequestDto, rawBody);
    const errors = await validate(dto, {
      whitelist: true,
      forbidUnknownValues: true,
    });

    if (errors.length > 0) {
      const details = errors
        .map((e) => Object.values(e.constraints ?? {}).join(", "))
        .filter(Boolean)
        .join("; ");
      throw new BadRequestException({
        error: "Invalid hire-quote payload",
        details: details || "Validation failed",
      });
    }

    if (dto.type !== "hire-quote") {
      throw new BadRequestException({
        error: "Invalid hire-quote payload",
        details: 'type must be "hire-quote"',
      });
    }

    if (dto.quote.contact.agreeToTerms !== true) {
      throw new BadRequestException({
        error: "Invalid hire-quote payload",
        details: "contact.agreeToTerms must be true",
      });
    }

    if (dto.quote.calculatedPrice <= 0) {
      throw new BadRequestException({
        error: "Invalid hire-quote payload",
        details: "calculatedPrice must be greater than 0",
      });
    }

    await this.sendHireQuoteEmails(dto.quote);
  }

  private mapProjectTypeLabel(projectType: ProjectType): string {
    switch (projectType) {
      case ProjectType.LANDING:
        return "Landing page";
      case ProjectType.DASHBOARD:
        return "SaaS dashboard";
      case ProjectType.API:
        return "API / backend";
      case ProjectType.MVP:
        return "Full MVP";
      default:
        return String(projectType);
    }
  }

  private mapTimelineLabel(timeline: Timeline): string {
    switch (timeline) {
      case Timeline.RUSH:
        return "Rush";
      case Timeline.STANDARD:
        return "Standard";
      case Timeline.FLEXIBLE:
        return "Flexible";
      case Timeline.EXTENDED:
        return "Extended";
      case Timeline.NOT_SURE:
        return "Not sure yet";
      default:
        return String(timeline);
    }
  }

  private mapBudgetRangeLabel(budgetRangeId: BudgetRangeId | null): string {
    switch (budgetRangeId) {
      case BudgetRangeId.RANGE_1K_2K:
        return "€1,000 – €2,000";
      case BudgetRangeId.RANGE_2K_5K:
        return "€2,000 – €5,000";
      case BudgetRangeId.RANGE_5K_15K:
        return "€5,000 – €15,000";
      case BudgetRangeId.RANGE_15K_30K:
        return "€15,000 – €30,000";
      case BudgetRangeId.RANGE_30K_PLUS:
        return "€30,000+";
      default:
        return "Not set";
    }
  }

  private buildInternalText(quote: HireQuoteDto): string {
    const projectTypeLabel = this.mapProjectTypeLabel(quote.projectType);
    const timelineLabel = this.mapTimelineLabel(quote.timeline);
    const budgetRangeLabel = this.mapBudgetRangeLabel(
      quote.budgetRangeId ?? null,
    );
    const budgetAlignment = quote.budgetMismatch
      ? "Estimate is above this range"
      : "Within this range";

    const featuresSection = quote.features.length
      ? quote.features.map((f) => `- ${f}`).join("\n")
      : "No specific feature IDs provided.";

    const estimatedDelivery = quote.estimatedDelivery ?? "Not calculated";

    return [
      "You've received a new project quote request.",
      "",
      "SUMMARY",
      "-------",
      `Project type: ${projectTypeLabel} (${quote.projectType})`,
      `Complexity: ${quote.complexity}`,
      `Timeline: ${timelineLabel}`,
      `Budget range: ${budgetRangeLabel}`,
      `Budget alignment: ${budgetAlignment}`,
      `Estimated price: €${quote.calculatedPrice}`,
      `Estimated delivery: ${estimatedDelivery}`,
      "",
      "FEATURES",
      "--------",
      featuresSection,
      "",
      "CLIENT",
      "------",
      `Name: ${quote.contact.name}`,
      `Email: ${quote.contact.email}`,
      `Company: ${quote.contact.company || "—"}`,
      `Notes: ${quote.contact.additionalInfo || "—"}`,
      "",
      "RAW QUOTE PAYLOAD",
      "-----------------",
      JSON.stringify(quote, null, 2),
    ].join("\n");
  }

  private buildClientText(quote: HireQuoteDto): string {
    const projectTypeLabel = this.mapProjectTypeLabel(quote.projectType);
    const timelineLabel = this.mapTimelineLabel(quote.timeline);
    const budgetRangeLabel = this.mapBudgetRangeLabel(
      quote.budgetRangeId ?? null,
    );
    const budgetAlignment = quote.budgetMismatch
      ? "Your selections are above this range; I’ll suggest ways to adjust scope or timeline."
      : "Your estimate is within this range.";

    const features = quote.features.length
      ? quote.features.join(", ")
      : "Not specified";

    const estimatedDelivery = quote.estimatedDelivery ?? "To be confirmed";

    const notes = quote.contact.additionalInfo || "—";

    return [
      `Hi ${quote.contact.name},`,
      "",
      "Thanks for walking through my quote builder and sharing details about your project.",
      "",
      "Here’s a quick summary of what you told me and the rough estimate we generated:",
      "",
      "Estimate overview",
      "-----------------",
      `Estimated total: €${quote.calculatedPrice}`,
      `Estimated delivery: ${estimatedDelivery}`,
      `Budget range: ${budgetRangeLabel}`,
      `Budget alignment: ${budgetAlignment}`,
      "",
      "Your choices so far",
      "-------------------",
      `Project type: ${projectTypeLabel}`,
      `Complexity: ${quote.complexity}`,
      `Timeline: ${timelineLabel}`,
      `Features: ${features}`,
      "",
      "Notes you shared",
      "----------------",
      notes,
      "",
      "What happens next",
      "-----------------",
      "I’ll personally review your answers and get back to you within 24–48 hours with:",
      "- A refined price range",
      "- Suggestions on scope and timeline",
      "- Clear next steps if you’d like to move forward",
      "",
      "If you’d rather jump straight to a call, you can also book a slot here:",
      "https://cal.com/daniel-iliesh/30min",
      "",
      "Talk soon,",
      "Daniel",
    ].join("\n");
  }

  private buildInternalHtml(quote: HireQuoteDto): string {
    const projectTypeLabel = this.mapProjectTypeLabel(quote.projectType);
    const timelineLabel = this.mapTimelineLabel(quote.timeline);
    const budgetRangeLabel = this.mapBudgetRangeLabel(
      quote.budgetRangeId ?? null,
    );
    const budgetAlignment = quote.budgetMismatch
      ? "Estimate is above this range"
      : "Within this range";
    const estimatedDelivery = quote.estimatedDelivery ?? "Not calculated";

    const featuresList = quote.features.length
      ? quote.features
          .map((f) => `<li style="margin:4px 0;">${f}</li>`)
          .join("")
      : '<p style="margin:0; color:#9ca3af;">No specific feature IDs provided.</p>';

    const rawPayload = JSON.stringify(quote, null, 2)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return `<!DOCTYPE html>
<html>
  <body style="background:#020617;color:#e5e7eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:24px;">
    <div style="max-width:600px;margin:0 auto;">
      <h1 style="font-size:20px;font-weight:600;margin-bottom:8px;">New project quote request</h1>
      <p style="margin:0 0 16px;color:#9ca3af;">A new hire-quote request was submitted from your portfolio site.</p>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">Estimate overview</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Project type:</span> ${projectTypeLabel} <span style="color:#4b5563;">(${quote.projectType})</span></p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Complexity:</span> ${quote.complexity}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Timeline:</span> ${timelineLabel}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Budget range:</span> ${budgetRangeLabel}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Budget alignment:</span> ${budgetAlignment}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Estimated price:</span> <span style="color:#22c55e;font-weight:600;">€${quote.calculatedPrice}</span></p>
        <p style="margin:0;"><span style="color:#9ca3af;">Estimated delivery:</span> ${estimatedDelivery}</p>
      </div>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">Features</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        ${quote.features.length ? `<ul style="padding-left:18px;margin:0;">${featuresList}</ul>` : '<p style="margin:0; color:#9ca3af;">No specific feature IDs provided.</p>'}
      </div>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">Client</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Name:</span> ${quote.contact.name}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Email:</span> ${quote.contact.email}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Company:</span> ${quote.contact.company || "—"}</p>
        <p style="margin:0;"><span style="color:#9ca3af;">Notes:</span> ${quote.contact.additionalInfo || "—"}</p>
      </div>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">Raw quote payload</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        <pre style="margin:0;font-size:12px;line-height:1.4;color:#e5e7eb;white-space:pre-wrap;">${rawPayload}</pre>
      </div>
    </div>
  </body>
</html>`;
  }

  private buildClientHtml(quote: HireQuoteDto): string {
    const projectTypeLabel = this.mapProjectTypeLabel(quote.projectType);
    const timelineLabel = this.mapTimelineLabel(quote.timeline);
    const budgetRangeLabel = this.mapBudgetRangeLabel(
      quote.budgetRangeId ?? null,
    );
    const budgetAlignment = quote.budgetMismatch
      ? "Your selections are above this range; I’ll suggest ways to adjust scope or timeline."
      : "Your estimate is within this range.";
    const features = quote.features.length
      ? quote.features.join(", ")
      : "Not specified";
    const estimatedDelivery = quote.estimatedDelivery ?? "To be confirmed";
    const notes = quote.contact.additionalInfo || "—";

    return `<!DOCTYPE html>
<html>
  <body style="background:#020617;color:#e5e7eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:24px;">
    <div style="max-width:600px;margin:0 auto;">
      <p style="margin:0 0 16px;">Hi ${quote.contact.name},</p>
      <p style="margin:0 0 16px;color:#d1d5db;">Thanks for walking through my quote builder and sharing details about your project.</p>
      <p style="margin:0 0 16px;color:#d1d5db;">Here’s a quick summary of what you told me and the rough estimate we generated:</p>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">Estimate overview</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Estimated total:</span> <span style="color:#22c55e;font-weight:600;">€${quote.calculatedPrice}</span></p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Estimated delivery:</span> ${estimatedDelivery}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Budget range:</span> ${budgetRangeLabel}</p>
        <p style="margin:0;"><span style="color:#9ca3af;">Budget alignment:</span> ${budgetAlignment}</p>
      </div>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">Your choices so far</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Project type:</span> ${projectTypeLabel}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Complexity:</span> ${quote.complexity}</p>
        <p style="margin:0 0 4px;"><span style="color:#9ca3af;">Timeline:</span> ${timelineLabel}</p>
        <p style="margin:0;"><span style="color:#9ca3af;">Features:</span> ${features}</p>
      </div>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">Notes you shared</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        <p style="margin:0;">${notes}</p>
      </div>

      <h2 style="font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:16px 0 8px;">What happens next</h2>
      <div style="background:#020617;border:1px solid #1f2937;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
        <p style="margin:0 0 8px;">I’ll personally review your answers and get back to you within 24–48 hours with:</p>
        <ul style="margin:0;padding-left:18px;">
          <li>A refined price range</li>
          <li>Suggestions on scope and timeline</li>
          <li>Clear next steps if you’d like to move forward</li>
        </ul>
      </div>

      <div style="background:#020617;border:1px solid #1f2937;border-radius:999px;padding:10px 16px;margin:16px 0 24px;text-align:center;">
        <a href="https://cal.com/daniel-iliesh/30min" style="color:#22c55e;text-decoration:none;font-weight:500;">Book a 30-minute call</a>
      </div>

      <p style="margin:0;color:#d1d5db;">Talk soon,<br/>Daniel</p>
    </div>
  </body>
</html>`;
  }

  private async sendMail({
    to,
    subject,
    text,
    html,
  }: SendMailOptions): Promise<void> {
    if (!this.mailFrom) {
      this.logger.error("Resend from address is not configured.");
      throw new InternalServerErrorException("Mail service is not configured.");
    }

    try {
      await this.resendClient.emails.send({
        from: this.mailFrom,
        to: [to],
        subject,
        text,
        html,
      });
    } catch (error) {
      this.logger.error("Failed to send email via Resend", error as Error);
      throw new InternalServerErrorException("Failed to send email.");
    }
  }

  async sendHireQuoteEmails(quote: HireQuoteDto): Promise<void> {
    const projectTypeLabel = this.mapProjectTypeLabel(quote.projectType);
    const timelineLabel = this.mapTimelineLabel(quote.timeline);

    const internalSubject = `New project quote request – ${projectTypeLabel} (${quote.complexity}, ${timelineLabel})`;
    const internalText = this.buildInternalText(quote);
    const internalHtml = this.buildInternalHtml(quote);

    const clientSubject =
      "Thanks for your project details – I’ll review your estimate";
    const clientText = this.buildClientText(quote);
    const clientHtml = this.buildClientHtml(quote);

    await this.sendMail({
      to: this.quoteNotifyTo,
      subject: internalSubject,
      text: internalText,
      html: internalHtml,
    });

    await this.sendMail({
      to: quote.contact.email,
      subject: clientSubject,
      text: clientText,
      html: clientHtml,
    });
  }
}
