import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GravatarService } from './gravatar.service';
import { GravatarController } from './gravatar.controller';
import { CustomModule } from 'src/app.interface';
import axios from 'axios';

@Module({
  providers: [
    {
      provide: CustomModule.GRAVATAR_INSTANCE,
      useFactory: (configService: ConfigService) => {
        const gravatarApiKey = configService.get<string>('GRAVATAR_API_KEY');
        if (!gravatarApiKey) {
          throw new Error(
            'GRAVATAR_API_KEY environment variable is not set.',
          );
        }
        const instance = axios.create({
            baseURL: "https://api.gravatar.com/v3",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${gravatarApiKey}`
            },
            timeout: 10000
        })
        return instance;
      },
      inject: [ConfigService],
    },
    GravatarService,
  ],
  exports: [GravatarService],
  controllers: [GravatarController],
})
export class GravatarModule {}
