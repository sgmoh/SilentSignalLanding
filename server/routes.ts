import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy endpoint
  app.get('/api/github/:username/:repo', async (req: Request, res: Response) => {
    try {
      const { username, repo } = req.params;
      
      const response = await fetch(`https://api.github.com/repos/${username}/${repo}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`);
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('GitHub API Error:', error);
      res.status(500).json({ error: 'Failed to fetch GitHub repository data' });
    }
  });
  
  // GitHub contributors endpoint
  app.get('/api/github/:username/:repo/contributors', async (req: Request, res: Response) => {
    try {
      const { username, repo } = req.params;
      
      const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contributors`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`);
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('GitHub API Error:', error);
      res.status(500).json({ error: 'Failed to fetch GitHub contributors data' });
    }
  });
  
  const httpServer = createServer(app);
  
  return httpServer;
}
