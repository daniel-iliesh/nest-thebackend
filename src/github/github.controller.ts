import {
  Controller,
  Get,
  Logger,
  Param,
  Query,
  Res,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { GithubService } from './github.service';
import {
  MinimalProjectResponse,
  GhUser,
  MediaFile,
  ProjectDetailResponse,
} from './interfaces/github.interface';

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
  async getUserProjects(
    @Query('includePrivate') includePrivate?: string,
    @Query('skipVisibleFilter') skipVisibleFilter?: string,
  ): Promise<MinimalProjectResponse[]> {
    // Only include private repos if explicitly requested
    const includePrivateRepos = includePrivate === 'true';
    // Skip visible filter to get all repos from projects.json
    const skipFilter = skipVisibleFilter === 'true';
    return await this.githubService.getProjects(
      includePrivateRepos,
      skipFilter,
    );
  }

  @Get('projects/:slug')
  async getProjectDetail(
    @Param('slug') slug: string,
    @Query('branch') branch?: string,
  ): Promise<ProjectDetailResponse> {
    return await this.githubService.getProjectDetail(slug, branch);
  }

  @Get('media/:repo')
  async getMedia(
    @Req() request: FastifyRequest,
    @Param('repo') repo: string,
    @Query('folder') folder?: string,
    @Query('branch') branch?: string,
  ): Promise<MediaFile[]> {
    // Construct base URL from request
    const protocol = request.headers['x-forwarded-proto'] || 'http';
    const host = request.headers.host || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;

    return await this.githubService.getMediaFiles(
      repo,
      folder || 'public',
      branch,
      baseUrl,
    );
  }

  /**
   * Proxy endpoint for serving media files from private repositories
   * This endpoint uses the authenticated GitHub token to fetch and serve files
   * Usage: /media-file/:owner/:repo?path=public/image.png&branch=main
   */
  @Get('media-file/:owner/:repo')
  async getMediaFile(
    @Res() reply: FastifyReply,
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Query('path') filePath: string,
    @Query('branch') branch?: string,
  ): Promise<void> {
    try {
      if (!filePath) {
        throw new HttpException(
          'Path parameter is required',
          HttpStatus.BAD_REQUEST,
        );
      }

      const { content, contentType } =
        await this.githubService.getMediaFileContent(
          owner,
          repo,
          filePath,
          branch,
        );

      reply
        .header('Content-Type', contentType)
        .header('Cache-Control', 'public, max-age=3600')
        .send(content);
    } catch (error: any) {
      this.logger.error(
        `Error serving media file ${filePath} from ${owner}/${repo}:`,
        error,
      );
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Failed to fetch media file',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('resume')
  async getResume(): Promise<any> {
    return await this.githubService.getResumeFromGist();
  }

  @Get('test')
  async test(@Param('repo') repo: string): Promise<any> {
    return await this.githubService.test(repo);
  }
}
