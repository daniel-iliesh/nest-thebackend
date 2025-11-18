import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { MailService } from "./mail.service";

@Controller("mail")
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async handleMail(@Body() body: unknown): Promise<{ ok: true }> {
    await this.mailService.handleMailRequest(body);
    return { ok: true };
  }
}
