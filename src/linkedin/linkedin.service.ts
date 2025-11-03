import { Inject, Injectable } from '@nestjs/common';
import { CustomModule } from 'src/app.interface';

interface LinkedinHttpClient {
  get<T = unknown>(url: string): Promise<T>;
  post<T = unknown>(url: string): Promise<T>;
}

@Injectable()
export class LinkedinService {
  constructor(
    @Inject(CustomModule.LINKEDIN_INSTANCE)
    private readonly linkedinInstance: LinkedinHttpClient,
  ) {}

  getProfile(): Promise<unknown> {
    return this.linkedinInstance.get('/me');
  }

  callback(): Promise<unknown> {
    return this.linkedinInstance.post('/callback');
  }
}
