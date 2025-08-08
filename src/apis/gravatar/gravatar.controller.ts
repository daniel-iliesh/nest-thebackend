import { Controller, Get } from '@nestjs/common';
import { GravatarService } from './gravatar.service';

@Controller('gravatar')
export class GravatarController {
  constructor(private readonly gravatarService: GravatarService) {}

  @Get("/")
  getProfile() {
    return this.gravatarService.getProfile();
  }
}
