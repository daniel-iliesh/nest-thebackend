import { Endpoints } from '@octokit/types';

export type GhUser = Endpoints['GET /users/{username}']['response']['data'];

export type GhRepo = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

export type GhRepoWithFavImage = GhRepo & { favimage?: string };
