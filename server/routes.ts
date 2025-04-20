import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes would go here if needed
  // Since this is a simple landing page, we don't need any API routes
  
  const httpServer = createServer(app);
  
  return httpServer;
}
