// GitHub API integration
import { apiRequest } from "./queryClient";

export interface RepositoryData {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  description: string;
  homepage: string | null;
  license: { name: string } | null;
  language: string;
  created_at: string;
  updated_at: string;
}

export interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

/**
 * Describes the Silent Signal Discord bot features
 * Based on repository information
 */
export interface BotFeatures {
  description: string;
  features: string[];
  language: string;
  license: string;
}

/**
 * Fetches repository information from GitHub through our backend proxy
 * @param username GitHub username
 * @param repo Repository name
 * @returns Repository data
 */
export async function fetchRepository(username: string, repo: string): Promise<RepositoryData> {
  try {
    const response = await apiRequest('GET', `/api/github/${username}/${repo}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching repository:", error);
    throw error;
  }
}

/**
 * Fetches contributors for a repository
 * @param username GitHub username
 * @param repo Repository name
 */
export async function fetchContributors(username: string, repo: string): Promise<Contributor[]> {
  try {
    const response = await apiRequest('GET', `/api/github/${username}/${repo}/contributors`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching contributors:", error);
    return [];
  }
}

/**
 * Fetches repository stats from GitHub
 * @param username GitHub username
 * @param repo Repository name 
 */
export async function fetchRepositoryStats(username: string, repo: string) {
  try {
    const [repoData, contributors] = await Promise.all([
      fetchRepository(username, repo),
      fetchContributors(username, repo)
    ]);
    
    return {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      issues: repoData.open_issues_count,
      contributorCount: Array.isArray(contributors) ? contributors.length : 0,
      description: repoData.description,
      homepage: repoData.homepage,
      license: repoData.license?.name || 'MIT',
      language: repoData.language || 'TypeScript',
      created_at: repoData.created_at,
      updated_at: repoData.updated_at
    };
  } catch (error) {
    console.error("Error fetching repository stats:", error);
    return null;
  }
}

/**
 * Fetches information about the SilentSignal Discord bot
 * @returns Bot features information
 */
export function getSilentSignalInfo(): BotFeatures {
  return {
    description: "Discord messaging web application that allows users to send direct messages to Discord users via a bot token.",
    features: [
      "Authentication with Discord bot token",
      "Single DM functionality to specific users",
      "Bulk messaging to multiple users",
      "Server member selection for easier messaging",
      "Auto-detection of servers the bot is in",
      "Message status tracking and history",
      "Rate limiting controls with configurable delays"
    ],
    language: "TypeScript",
    license: "MIT"
  };
}