import { Endpoints } from '@octokit/types';

export type GhUser = Endpoints['GET /users/{username}']['response']['data'];

export type GhRepo = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

export type GhRepoWithFavImage = GhRepo & { favimage?: string };

// Safe repository response without sensitive fields
export type SafeRepoResponse = Omit<
  GhRepoWithFavImage,
  | 'permissions'
  | 'allow_forking'
  | 'allow_squash_merge'
  | 'allow_merge_commit'
  | 'allow_rebase_merge'
  | 'allow_auto_merge'
  | 'delete_branch_on_merge'
  | 'allow_update_branch'
  | 'use_squash_pr_title_as_default'
  | 'squash_merge_commit_message'
  | 'squash_merge_commit_title'
  | 'merge_commit_message'
  | 'merge_commit_title'
  | 'web_commit_signoff_required'
  | 'security_and_analysis'
> & {
  favimage?: string;
};

// Minimal project response with only essential fields for public display
export interface MinimalProjectResponse {
  id: number;
  name: string;
  full_name: string;
  slug?: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  visibility: string | null;
  default_branch: string;
  favimage?: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

// Detailed project response with page content
export interface ProjectDetailResponse extends MinimalProjectResponse {
  blogContent?: string | null;
  blogSource?: 'BLOG.md' | 'README.md' | null;
  medias?: MediaFile[];
}

// Media file response
export interface MediaFile {
  name: string;
  path: string;
  download_url: string; // Direct URL for public repos, proxied URL for private repos
  size: number;
  type: string;
  is_private?: boolean; // Indicates if repo is private
}

// Project configuration from projects.json
export interface ProjectConfig {
  owner: string;
  repo: string;
}