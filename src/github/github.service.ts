import { Injectable, Inject, Logger } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';
import {
  GhRepoWithFavImage,
  SafeRepoResponse,
  MediaFile,
  MinimalProjectResponse,
  ProjectDetailResponse,
  ProjectConfig,
} from './interfaces/github.interface';
import { RequestError } from '@octokit/request-error';
import { CustomModule } from 'src/app.interface';
import { readFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class GithubService {
  private readonly username: string;
  private readonly logger = new Logger(GithubService.name);

  /**
   * Try branches in order until content is found.
   */
  private async getContentWithBranchFallback(
    owner: string,
    repo: string,
    path: string,
    branches: string[],
  ) {
    const uniqueBranches = Array.from(new Set(branches));
    let lastError: any;

    for (const ref of uniqueBranches) {
      try {
        return await this.octokit.repos.getContent({ owner, repo, path, ref });
      } catch (error: any) {
        if (error instanceof RequestError && error.status === 404) {
          lastError = error;
          continue;
        }
        throw error;
      }
    }

    throw lastError ?? new Error(`Content ${path} not found in ${owner}/${repo}`);
  }

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

  getRepoReadme = async (repoName: string, branch?: string) => {
    try {
      const branches = branch ? [branch, 'main', 'master'] : ['main', 'master'];
      for (const ref of Array.from(new Set(branches))) {
        try {
          const { data } = await this.octokit.repos.getReadme({
            owner: process.env.GITHUB_USERNAME as string,
            repo: repoName,
            mediaType: {
              format: 'markdown',
            },
            ref,
          });
          return Buffer.from(data.content, 'base64').toString('utf-8');
        } catch (error: any) {
          if (error instanceof RequestError && error.status === 404) {
            continue;
          }
          throw error;
        }
      }
      return null;
    } catch (error: any) {
      if (error.status === 404) {
        this.logger.warn(`README not found for repo ${repoName}`);
        return null;
      }
      this.logger.error(`Error fetching README for repo ${repoName}:`, error);
      throw error;
    }
  };

  /**
   * Extract projects from resume.json Gist
   * Supports either an explicit slug (owner/repo) or a GitHub URL
   */
  private async loadProjectsFromResume(): Promise<ProjectConfig[]> {
    try {
      const resume = await this.getResumeFromGist();
      const projects = resume.projects || [];

      const projectConfigs: ProjectConfig[] = projects
        .map((project: any) => {
          // Prefer explicit slug if provided (id accepted as alias)
          const slug: string | undefined = project.slug || project.id;
          if (slug && slug.includes('/')) {
            const [owner, repo] = slug.split('/');
            if (owner && repo) {
              return { owner, repo: repo.replace(/\.git$/, '') };
            }
          }

          // Fallback: parse GitHub URL: https://github.com/owner/repo
          if (project.url) {
            const githubUrlMatch = project.url.match(
              /github\.com\/([^\/]+)\/([^\/]+)/,
            );
            if (githubUrlMatch) {
              const normalizedRepo = githubUrlMatch[2].replace(/\.git$/, '');
              return {
                owner: githubUrlMatch[1],
                repo: normalizedRepo, // Remove .git suffix if present
              };
            }
          }

          return null;
        })
        .filter((config: ProjectConfig | null) => config !== null) as ProjectConfig[];

      return projectConfigs;
    } catch (error: any) {
      this.logger.warn(
        'Failed to load projects from resume.json Gist, falling back to user repos',
        error,
      );
      return [];
    }
  }

  /**
   * Get README for a specific repo (supports org/user repos)
   */
  private async getRepoReadmeByOwner(
    owner: string,
    repo: string,
    branch?: string,
  ): Promise<string | null> {
    try {
      const branches = branch ? [branch, 'main', 'master'] : ['main', 'master'];
      for (const ref of Array.from(new Set(branches))) {
        try {
          const { data } = await this.octokit.repos.getReadme({
            owner,
            repo,
            mediaType: {
              format: 'markdown',
            },
            ref,
          });
          return Buffer.from(data.content, 'base64').toString('utf-8');
        } catch (error: any) {
          if (error instanceof RequestError && error.status === 404) {
            continue;
          }
          throw error;
        }
      }
      return null;
    } catch (error: any) {
      if (error.status === 404) {
        this.logger.warn(`README not found for ${owner}/${repo}`);
        return null;
      }
      this.logger.error(`Error fetching README for ${owner}/${repo}:`, error);
      return null;
    }
  }

  /**
   * Fetch a text file from repo if it exists (returns UTF-8 string)
   */
  private async getRepoTextFile(
    owner: string,
    repo: string,
    path: string,
    branch?: string,
  ): Promise<string | null> {
    try {
      const branches = branch ? [branch, 'main', 'master'] : ['main', 'master'];
      const { data } = await this.getContentWithBranchFallback(
        owner,
        repo,
        path,
        branches,
      );

      if (Array.isArray(data) || !('content' in data)) {
        return null;
      }

      return Buffer.from(data.content, 'base64').toString('utf-8');
    } catch (error: any) {
      if (error instanceof RequestError && error.status === 404) {
        return null;
      }
      this.logger.error(
        `Error fetching file ${path} from ${owner}/${repo}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Get project markdown content (BLOG.md preferred, fallback to README.md)
   */
  private async getProjectMarkdown(
    owner: string,
    repo: string,
    branch?: string,
  ): Promise<{ content: string | null; source: 'BLOG.md' | 'README.md' | null }> {
    // Try BLOG.md first
    const blog = await this.getRepoTextFile(owner, repo, 'BLOG.md', branch);
    if (blog) return { content: blog, source: 'BLOG.md' };

    // Fallback to README.md
    const readme = await this.getRepoTextFile(owner, repo, 'README.md', branch);
    if (readme) return { content: readme, source: 'README.md' };

    return { content: null, source: null };
  }

  /**
   * Get favimage for a specific repo (supports org/user repos)
   */
  private async getFavimageByOwner(
    owner: string,
    repo: string,
  ): Promise<string | null> {
    try {
      const { data } = await this.getContentWithBranchFallback(
        owner,
        repo,
        'favimage.png',
        ['main', 'master'],
      );

      if (Array.isArray(data)) {
        throw new Error('Unexpected response format');
      }

      return data.download_url;
    } catch (error: any) {
      if (error.status === 404) {
        this.logger.warn(`favimage not found for ${owner}/${repo}`);
        return null;
      }
      this.logger.error(`Error fetching favimage for ${owner}/${repo}:`, error);
      return null;
    }
  }

  getProjects = async (
    includePrivate: boolean = false,
    skipVisibleFilter: boolean = false,
  ): Promise<MinimalProjectResponse[]> => {
    try {
      // Load project list from resume.json Gist
      const projectConfigs = await this.loadProjectsFromResume();

      // If resume has projects, use them
      if (projectConfigs.length > 0) {
        const projects: (MinimalProjectResponse | null)[] =
          await Promise.all(
            projectConfigs.map(async ({ owner, repo }) => {
              try {
                // Fetch repo data
                const { data: repoData } = await this.octokit.repos.get({
                  owner,
                  repo,
                });

                // Filter out private repos unless explicitly requested
                if (!includePrivate && repoData.private) {
                  return null;
                }

                // When using resume.json, always skip README filter
                // (user explicitly listed these projects in resume, so return them all)
                // The README filter is only relevant when fetching all user repos

                const favimage = await this.getFavimageByOwner(owner, repo);

                const slugValue = `${owner}/${repo}`;
                return {
                  id: repoData.id,
                  name: repoData.name,
                  full_name: repoData.full_name,
                  slug: slugValue,
                  description: repoData.description,
                  html_url: repoData.html_url,
                  homepage: repoData.homepage,
                  language: repoData.language,
                  stargazers_count: repoData.stargazers_count,
                  forks_count: repoData.forks_count,
                  created_at: repoData.created_at,
                  updated_at: repoData.updated_at,
                  pushed_at: repoData.pushed_at,
                  topics: repoData.topics || [],
                  visibility: repoData.visibility ?? null,
                  default_branch: repoData.default_branch,
                  favimage: favimage || undefined,
                  owner: {
                    login: repoData.owner.login,
                    avatar_url: repoData.owner.avatar_url,
                    html_url: repoData.owner.html_url,
                  },
                } as MinimalProjectResponse;
              } catch (error: any) {
                if (error instanceof RequestError && error.status === 404) {
                  this.logger.warn(`Repo ${owner}/${repo} not found`);
                  return null;
                }
                this.logger.error(
                  `Error fetching repo ${owner}/${repo}:`,
                  error,
                );
                return null;
              }
            }),
          );

        return projects.filter(
          (repo) => repo !== null,
        ) as MinimalProjectResponse[];
      }

      // Fallback to old behavior: fetch all user repos
      const { data: repos } = await this.octokit.repos.listForUser({
        username: this.username,
        type: 'all',
      });

      const visibleRepos: (MinimalProjectResponse | null)[] =
        await Promise.all(
          repos.map(async (repo) => {
            if (!includePrivate && repo.private) {
              return null;
            }

            if (!skipVisibleFilter) {
              const readme = await this.getRepoReadme(repo.name);
              if (!readme) return null;

              const metadataMatch = readme.match(/<!--([\s\S]*?)-->/);
              if (metadataMatch) {
                try {
                  const metadata = JSON.parse(metadataMatch[1].trim());
                  if (metadata.visible !== 'true') {
                    return null;
                  }
                } catch (parseError) {
                  this.logger.error(
                    `Error parsing metadata for ${repo.name}:`,
                    parseError,
                  );
                  return null;
                }
              } else {
                return null;
              }
            }

            const favimage = await this.getFavimage(repo.name);

            return {
              id: repo.id,
              name: repo.name,
              full_name: repo.full_name,
              slug: `${repo.owner.login}/${repo.name}`,
              description: repo.description,
              html_url: repo.html_url,
              homepage: repo.homepage,
              language: repo.language,
              stargazers_count: repo.stargazers_count,
              forks_count: repo.forks_count,
              created_at: repo.created_at,
              updated_at: repo.updated_at,
              pushed_at: repo.pushed_at,
              topics: repo.topics || [],
              visibility: repo.visibility ?? null,
              default_branch: repo.default_branch,
              favimage: favimage || undefined,
              owner: {
                login: repo.owner.login,
                avatar_url: repo.owner.avatar_url,
                html_url: repo.owner.html_url,
              },
            } as MinimalProjectResponse;
          }),
        );

      return visibleRepos.filter(
        (repo) => repo !== null,
      ) as MinimalProjectResponse[];
    } catch (error) {
      this.logger.error(
        `Error fetching projects for user ${this.username}:`,
        error,
      );
      throw error;
    }
  };

  /**
   * Resolve slug or identifier to owner/repo.
   * Accepts "owner/repo" or matches resume project id/slug.
   */
  private async resolveOwnerRepo(slug: string): Promise<{ owner: string; repo: string }> {
    if (slug.includes('/')) {
      const [owner, repo] = slug.split('/');
      if (owner && repo) return { owner, repo };
    }

    // Try to match against resume projects
    const projectConfigs = await this.loadProjectsFromResume();
    const match = projectConfigs.find(
      ({ owner, repo }) => `${owner}/${repo}` === slug || repo === slug,
    );
    if (match) return match;

    throw new Error(`Project slug '${slug}' not found`);
  }

  /**
   * Get detailed project info with markdown content (BLOG.md preferred, README.md fallback)
   */
  getProjectDetail = async (
    slug: string,
    branch?: string,
  ): Promise<ProjectDetailResponse> => {
    try {
      const { owner, repo } = await this.resolveOwnerRepo(slug);

      const { data: repoData } = await this.octokit.repos.get({
        owner,
        repo,
      });

      const favimage = await this.getFavimageByOwner(owner, repo);
      const { content: blogContent, source: blogSource } = await this.getProjectMarkdown(
        owner,
        repo,
        branch,
      );
      // Fetch media from public folder (default); for private repos, baseUrl is needed to proxy
      const medias = await this.getMediaFiles(
        `${owner}/${repo}`,
        'public',
        branch,
      );

      return {
        id: repoData.id,
        name: repoData.name,
        full_name: repoData.full_name,
        slug: `${owner}/${repo}`,
        description: repoData.description,
        html_url: repoData.html_url,
        homepage: repoData.homepage,
        language: repoData.language,
        stargazers_count: repoData.stargazers_count,
        forks_count: repoData.forks_count,
        created_at: repoData.created_at,
        updated_at: repoData.updated_at,
        pushed_at: repoData.pushed_at,
        topics: repoData.topics || [],
        visibility: repoData.visibility ?? null,
        default_branch: repoData.default_branch,
        favimage: favimage || undefined,
        medias,
        owner: {
          login: repoData.owner.login,
          avatar_url: repoData.owner.avatar_url,
          html_url: repoData.owner.html_url,
        },
        blogContent,
        blogSource,
      };
    } catch (error) {
      this.logger.error(`Error fetching project detail for ${slug}:`, error);
      throw error;
    }
  };

  getFavimage = async (repoName: string) => {
    try {
      const { data } = await this.getContentWithBranchFallback(
        this.username,
        repoName,
        'favimage.png',
        ['main', 'master'],
      );

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

  /**
   * Get media files (images/videos) from a folder in a repository
   * Supports both public and private repos
   * @param repoIdentifier - Can be "repo" or "owner/repo"
   * @param folderPath - Path to the folder (e.g., 'public', 'media', 'images')
   * @param branch - Optional branch name (defaults to 'main')
   * @param baseUrl - Base URL of the API (for proxied private repo URLs)
   * @returns Array of media files with download URLs
   */
  getMediaFiles = async (
    repoIdentifier: string, // Can be "repo" or "owner/repo"
    folderPath: string = 'public',
    branch?: string,
    baseUrl?: string,
  ): Promise<MediaFile[]> => {
    try {
      // Parse repo identifier - can be "repo" or "owner/repo"
      const [owner, repo] = repoIdentifier.includes('/')
        ? repoIdentifier.split('/')
        : [this.username, repoIdentifier];

      // Check if repo is private
      let isPrivate = false;
      try {
        const { data: repoData } = await this.octokit.repos.get({
          owner,
          repo,
        });
        isPrivate = repoData.private;
      } catch (error) {
        this.logger.warn(`Could not determine privacy status for ${owner}/${repo}`);
      }

      const branches = branch ? [branch, 'main', 'master'] : ['main', 'master'];
      const { data } = await this.getContentWithBranchFallback(
        owner,
        repo,
        folderPath,
        branches,
      );

      // If it's a single file, return empty array (we want folders only)
      if (!Array.isArray(data)) {
        this.logger.warn(
          `Path ${folderPath} in repo ${owner}/${repo} is not a directory`,
        );
        return [];
      }

      // Supported media extensions
      const mediaExtensions = [
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.svg',
        '.webp',
        '.bmp',
        '.ico',
        '.tiff',
        '.tif',
        '.mp4',
        '.webm',
      ];

      // Filter for media files only
      const mediaFiles: MediaFile[] = data
        .filter((item) => {
          if (item.type !== 'file') return false;
          const extension = item.name
            .toLowerCase()
            .substring(item.name.lastIndexOf('.'));
          return mediaExtensions.includes(extension);
        })
        .map((item) => {
          // For private repos, use proxied URL through our backend
          // For public repos, use direct GitHub CDN URL
          let downloadUrl = item.download_url || '';
          if (isPrivate && baseUrl) {
            // Create proxied URL: /media-file/:owner/:repo?path=...
            const encodedPath = encodeURIComponent(item.path);
            downloadUrl = `${baseUrl}/media-file/${owner}/${repo}?path=${encodedPath}${branch ? `&branch=${encodeURIComponent(branch)}` : ''}`;
          }

          return {
            name: item.name,
            path: item.path,
            download_url: downloadUrl,
            size: item.size,
            type: item.type,
            is_private: isPrivate,
          };
        });

      return mediaFiles;
    } catch (error: any) {
      if (error instanceof RequestError && error.status === 404) {
        this.logger.warn(
          `Folder ${folderPath} not found in repo ${repoIdentifier}`,
        );
        return [];
      }
      this.logger.error(
        `Error fetching media files from ${folderPath} in repo ${repoIdentifier}:`,
        error,
      );
      throw error;
    }
  };

  /**
   * Get a single media file content (for proxying private repo files)
   * @param owner - Repository owner
   * @param repo - Repository name
   * @param filePath - Path to the file
   * @param branch - Optional branch name
   * @returns File content as Buffer and content type
   */
  getMediaFileContent = async (
    owner: string,
    repo: string,
    filePath: string,
    branch?: string,
  ): Promise<{ content: Buffer; contentType: string }> => {
    try {
      const branches = branch ? [branch, 'main', 'master'] : ['main', 'master'];
      const { data } = await this.getContentWithBranchFallback(
        owner,
        repo,
        filePath,
        branches,
      );

      if (Array.isArray(data)) {
        throw new Error('Expected file, got directory');
      }

      if (!('content' in data)) {
        throw new Error('File content not available');
      }

      // Decode base64 content
      const content = Buffer.from(data.content, 'base64');

      // Determine content type from file extension
      const extension = filePath.toLowerCase().substring(filePath.lastIndexOf('.'));
      const contentTypeMap: Record<string, string> = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.bmp': 'image/bmp',
        '.ico': 'image/x-icon',
        '.tiff': 'image/tiff',
        '.tif': 'image/tiff',
        '.mp4': 'video/mp4',
        '.webm': 'video/webm',
      };

      const contentType = contentTypeMap[extension] || 'application/octet-stream';

      return { content, contentType };
    } catch (error: any) {
      if (error instanceof RequestError && error.status === 404) {
        throw new Error(`File ${filePath} not found in ${owner}/${repo}`);
      }
      this.logger.error(
        `Error fetching file ${filePath} from ${owner}/${repo}:`,
        error,
      );
      throw error;
    }
  };

  /**
   * Get resume from GitHub Gist
   * Searches for a gist containing resume.json and returns the latest version
   */
  getResumeFromGist = async (): Promise<any> => {
    try {
      // List all gists for the user
      const { data: gists } = await this.octokit.gists.listForUser({
        username: this.username,
        per_page: 100,
      });

      // Find the gist containing resume.json
      const resumeGist = gists.find((gist) => {
        return gist.files && 'resume.json' in gist.files;
      });

      if (!resumeGist) {
        throw new Error(
          `No gist containing resume.json found for user ${this.username}`,
        );
      }

      // Get the latest version of the gist
      const { data: gist } = await this.octokit.gists.get({
        gist_id: resumeGist.id,
      });

      // Extract resume.json content
      const resumeFile = gist.files?.['resume.json'];
      if (!resumeFile) {
        throw new Error('resume.json file not found in gist');
      }

      // Parse the content (it's already a string from the API)
      const resumeContent = resumeFile.content;
      if (!resumeContent) {
        throw new Error('resume.json file is empty');
      }

      return JSON.parse(resumeContent);
    } catch (error: any) {
      if (error instanceof RequestError && error.status === 404) {
        this.logger.warn(`Gist not found for user ${this.username}`);
        throw new Error(
          `Resume gist not found for user ${this.username}`,
        );
      }
      this.logger.error(
        `Error fetching resume from Gist for user ${this.username}:`,
        error,
      );
      throw error;
    }
  };
}
