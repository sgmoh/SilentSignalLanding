// GitHub API integration
import { getQueryFn } from "./queryClient";

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