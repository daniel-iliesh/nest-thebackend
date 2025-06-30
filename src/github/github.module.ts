import { Module } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { CustomModule } from 'src/app.interface';

@Module({
  providers: [
    {
      provide: CustomModule.OCTOKIT_INSTANCE,
      useFactory: (configService: ConfigService) => {
        const githubToken = configService.get<string>('GITHUB_TOKEN');
        if (!githubToken) {
          throw new Error(
            'GITHUB_TOKEN environment variable is not set for Octokit.',
          );
        }
        return new Octokit({ auth: githubToken });
      },
      inject: [ConfigService],
    },
    GithubService,
  ],
  exports: [GithubService],
  controllers: [GithubController],
})
export class GithubModule {}
