import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist registration endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      const entry = await storage.createWaitlistEntry({
        ...validatedData,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({
        message: "Successfully joined the waitlist",
        data: entry
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const message = await storage.createContactMessage({
        ...validatedData,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
