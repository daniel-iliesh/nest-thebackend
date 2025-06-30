import { Controller, Get, Logger, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { GhRepoWithFavImage, GhUser } from './interfaces/github.interface';

@Controller()
export class GithubController {
  logger = new Logger(GithubController.name);

  constructor(private readonly githubService: GithubService) {}

  @Get()
  async getUserInfo(): Promise<GhUser> {
    return this.githubService.getUserData();
  }

  @Get('readme')
  async getUserReadme(): Promise<string | null> {
    return await this.githubService.getUserReadme();
  }

  @Get('projects')
  async getUserProjects(): Promise<GhRepoWithFavImage[]> {
    return await this.githubService.getProjects();
  }

  @Get('test')
  async test(@Param('repo') repo: string): Promise<any> {
    return await this.githubService.test(repo);
  }
}
