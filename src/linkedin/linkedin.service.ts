import { Inject, Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { CustomModule } from 'src/app.interface';

@Injectable()
export class LinkedinService {
  constructor(
    @Inject(CustomModule.LINKEDIN_INSTANCE)
    private readonly linkedinInstance: AxiosInstance,
  ) {}

  async getProfile(): Promise<any> {
    return this.linkedinInstance.get('/me');
  }

  async callback(): Promise<any> {
    return this.linkedinInstance.post('/callback');
  }
}
