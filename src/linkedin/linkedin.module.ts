import { Module } from '@nestjs/common';
import { LinkedinController } from './linkedin.controller';
import { CustomModule } from 'src/app.interface';
import axios, { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { LinkedinService } from './linkedin.service';

@Module({
  providers: [
    {
      provide: CustomModule.LINKEDIN_INSTANCE,
      useFactory: async (
        configService: ConfigService,
      ): Promise<AxiosInstance> => {
        const baseUrl = 'https://api.linkedin.com/v2';
        const accessToken = configService.get<string>('LINKEDIN_ACCESS_TOKEN');

        const grant_type = 'client_credentials';
        const client_id = configService.get<string>('LINKEDIN_CLIENT_ID');
        const client_secret = configService.get<string>(
          'LINKEDIN_CLIENT_SECRET',
        );

        const res = await axios.post(
          baseUrl + '/accessToken',
          {
            grant_type,
            client_id,
            client_secret,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );

        console.log('res', res);
        const instance = axios.create({
          baseURL: baseUrl,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          timeout: 10000,
        });
        return instance;
      },
      inject: [ConfigService],
    },
    LinkedinService,
  ],
  controllers: [LinkedinController],
})
export class LinkedinModule {}
