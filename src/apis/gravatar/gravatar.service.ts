import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
import { CustomModule } from 'src/app.interface';
import { GravatarProfile } from './types';

@Injectable()
export class GravatarService {
  private readonly stub: string;
  private readonly logger = new Logger(GravatarService.name);

  constructor(
    @Inject(CustomModule.GRAVATAR_INSTANCE)
    private readonly gravatarApi: AxiosInstance,
    private readonly configService: ConfigService,
  ) {
    const gravatarStub = this.configService.get<string>('GRAVATAR_STUB');
    if (!gravatarStub) {
      throw new Error('GRAVATAR_STUB is not defined');
    }
    this.stub = gravatarStub;
  }

  async getProfile(): Promise<GravatarProfile | undefined> {
    try {
      const { data } = await this.gravatarApi.get<GravatarProfile>(
        `/profiles/${this.stub}`,
      );
      return data;
    } catch (error) {
      this.logger.error('Failed to get Gravatar Profile', error);
      return;
    }
  }
}
