// GitHub API integration
import { apiRequest } from "./queryClient";

/**
 * Fetches repository information from GitHub through our backend proxy
 * @param username GitHub username
 * @param repo Repository name
 * @returns Repository data
 */
export async function fetchRepository(username: string, repo: string) {
  return apiRequest(`/api/github/${username}/${repo}`, {
    method: "GET"
  });
}

/**
 * Fetches repository stats from GitHub
 * @param username GitHub username
 * @param repo Repository name 
 */
export async function fetchRepositoryStats(username: string, repo: string) {
  const [repoData, contributors] = await Promise.all([
    fetchRepository(username, repo),
    fetchContributors(username, repo)
  ]);
  
  return {
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
    issues: repoData.open_issues_count,
    contributorCount: contributors.length,
    description: repoData.description,
    homepage: repoData.homepage,
    license: repoData.license?.name || 'N/A',
    language: repoData.language,
    created_at: repoData.created_at,
    updated_at: repoData.updated_at
  };
}

/**
 * Fetches contributors for a repository
 * @param username GitHub username
 * @param repo Repository name
 */
async function fetchContributors(username: string, repo: string) {
  return apiRequest(`/api/github/${username}/${repo}/contributors`, {
    method: "GET"
  });
}