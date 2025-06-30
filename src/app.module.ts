import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GithubModule } from './github/github.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [AppConfigModule, GithubModule],
  controllers: [AppController],
})
export class AppModule {}
