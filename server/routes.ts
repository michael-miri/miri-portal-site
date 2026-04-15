import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = ["michael@miritechnology.com", "richard@miritechnology.com"];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message, source } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      const isDemo = source === "demo";
      const phone = req.body.phone || "N/A";

      const subject = isDemo
        ? `Free Demo Request from ${name}${company ? ` — ${company}` : ""}`
        : `Contact Form Submission from ${name}${company ? ` — ${company}` : ""}`;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0645FF;">${isDemo ? "New Demo Request" : "New Contact Form Submission"}</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${isDemo && phone !== "N/A" ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>${isDemo ? "About their business:" : "Message:"}</strong></p>
          <p style="white-space: pre-wrap; background: #f8f8f8; padding: 16px; border-radius: 8px;">${message || "No additional details provided."}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Submitted via miritechnology.com${isDemo ? " — Demo Landing Page" : " — Contact Form"}</p>
        </div>
      `;

      await resend.emails.send({
        from: "Miri Website <onboarding@resend.dev>",
        to: RECIPIENTS,
        replyTo: email,
        subject,
        html: htmlContent,
      });

      return res.json({ success: true });
    } catch (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ error: "Failed to send email. Please try again." });
    }
  });

  return httpServer;
}
