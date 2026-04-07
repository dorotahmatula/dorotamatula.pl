import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors[0].message });
      }

      const result = await storage.subscribeNewsletter(parsed.data.email);

      const mailerliteKey = process.env.MAILERLITE_API_KEY;
      const newsletterGroupId = process.env.MAILERLITE_NEWSLETTER_GROUP_ID;
      if (mailerliteKey) {
        try {
          const subscriberBody: any = {
            email: parsed.data.email,
            status: "active",
          };
          if (newsletterGroupId) {
            subscriberBody.groups = [newsletterGroupId];
          }
          const mlResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${mailerliteKey}`,
            },
            body: JSON.stringify(subscriberBody),
          });

          if (!mlResponse.ok) {
            const mlError = await mlResponse.text();
            console.error("MailerLite API error:", mlResponse.status, mlError);
          } else {
            console.log(`Subscriber added to MailerLite: ${parsed.data.email}`);
          }
        } catch (mlErr) {
          console.error("MailerLite connection error:", mlErr);
        }
      }

      res.json({ success: true, subscriber: result });
    } catch (error: any) {
      console.error("Newsletter error:", error);
      res.status(500).json({ error: "Nie udało się zapisać. Spróbuj ponownie." });
    }
  });

  return httpServer;
}
