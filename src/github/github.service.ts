import { Injectable, Inject, Logger } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';
import { GhRepoWithFavImage } from './interfaces/github.interface';
import { RequestError } from '@octokit/request-error';
import { CustomModule } from 'src/app.interface';

@Injectable()
export class GithubService {
  private readonly username: string;
  private readonly logger = new Logger(GithubService.name);

  constructor(
    @Inject(CustomModule.OCTOKIT_INSTANCE) private readonly octokit: Octokit,
    private readonly configService: ConfigService,
  ) {
    const gh_username = this.configService.get<string>('GITHUB_USERNAME');
    if (!gh_username) {
      throw new Error('GITHUB_USERNAME is not defined');
    }
    this.username = gh_username;
  }

  getUserData = async () => {
    try {
      const { data } = await this.octokit.users.getByUsername({
        username: this.username,
      });
      return data;
    } catch (error: unknown) {
      this.logger.error(
        `Error fetching user data for ${this.username}:`,
        error instanceof Error ? error.message : String(error),
        error,
      );
      throw error;
    }
  };

  getUserReadme = async () => {
    try {
      const { data } = await this.octokit.repos.getReadme({
        owner: this.username,
        repo: this.username,
        mediaType: {
          format: 'html',
        },
      });
      return data as unknown as string;
    } catch (error: unknown) {
      if (error instanceof RequestError && error.status === 404) {
        this.logger.warn(`README not found for user ${this.username}`);
        return null;
      }
      this.logger.error(
        `Error fetching README for user ${this.username}:`,
        error,
      );
      throw error;
    }
  };

  getRepoReadme = async (repoName: string) => {
    try {
      const { data } = await this.octokit.repos.getReadme({
        owner: process.env.GITHUB_USERNAME as string,
        repo: repoName,
        mediaType: {
          format: 'markdown',
        },
      });
      return Buffer.from(data.content, 'base64').toString('utf-8');
    } catch (error: any) {
      if (error.status === 404) {
        this.logger.warn(`README not found for repo ${repoName}`);
        return null;
      }
      this.logger.error(`Error fetching README for repo ${repoName}:`, error);
      throw error;
    }
  };

  getProjects = async (): Promise<GhRepoWithFavImage[]> => {
    try {
      const { data: repos } = await this.octokit.repos.listForUser({
        username: this.username,
      });

      const visibleRepos: (GhRepoWithFavImage | null)[] = await Promise.all(
        repos.map(async (repo) => {
          const readme = await this.getRepoReadme(repo.name);
          if (!readme) return null;

          const metadataMatch = readme.match(/<!--([\s\S]*?)-->/);
          if (metadataMatch) {
            try {
              const metadata = JSON.parse(metadataMatch[1].trim());
              if (metadata.visible === 'true') {
                const favimage = await this.getFavimage(repo.name);
                if (!favimage) return repo as GhRepoWithFavImage;
                else
                  return {
                    ...repo,
                    favimage,
                  } as GhRepoWithFavImage;
              }
            } catch (parseError) {
              this.logger.error(
                `Error parsing metadata for ${repo.name}:`,
                parseError,
              );
              return null;
            }
          }
          return null;
        }),
      );

      return visibleRepos.filter((repo) => repo !== null);
    } catch (error) {
      this.logger.error(
        `Error fetching projects for user ${this.username}:`,
        error,
      );
      throw error;
    }
  };

  getFavimage = async (repoName: string) => {
    try {
      const { data } = await this.octokit.repos.getContent({
        owner: this.username,
        repo: repoName,
        path: 'favimage.png',
      });

      if (Array.isArray(data)) {
        throw new Error('Unexpected response format');
      }

      return data.download_url;
    } catch (error: any) {
      if (error.status === 404) {
        this.logger.warn(`favimage not found for repo ${repoName}`);
        return null;
      }
      this.logger.error(`Error fetching favimage for ${repoName}:`, error);
      return null;
    }
  };

  getMarkdownAsHtml = async (owner: string, repo: string, path: string) => {
    try {
      const { data: fileData } = await this.octokit.repos.getContent({
        owner,
        repo,
        path,
      });

      if ('content' in fileData) {
        const fileContent = Buffer.from(fileData.content, 'base64').toString(
          'utf-8',
        );

        const { data: htmlContent } = await this.octokit.markdown.render({
          text: fileContent,
          mode: 'gfm',
        });

        return htmlContent;
      }

      throw new Error('Unexpected response format');
    } catch (error) {
      this.logger.error(`Error fetching markdown content for ${path}:`, error);
      throw error;
    }
  };

  async test(repository_path: string): Promise<any> {
    const [owner, repo] = repository_path.split('/');

    return await this.octokit.repos.get({
      owner,
      repo,
    });
  }
}
