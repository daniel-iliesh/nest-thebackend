import { Controller, Get, Post } from '@nestjs/common';
import { LinkedinService } from './linkedin.service';

@Controller('linkedin')
export class LinkedinController {
  constructor(private readonly linkedinService: LinkedinService) {}

  @Get()
  getProfile(): Promise<any> {
    return this.linkedinService.getProfile();
  }

  @Post('callback')
  callback(): Promise<any> {
    return this.linkedinService.callback();
  }
}
