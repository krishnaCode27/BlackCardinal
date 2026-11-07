import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  businessName: z.string().trim().max(120).optional().default(""),
  email: z.email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  service: z.string().trim().min(2).max(100),
  budget: z.string().max(80).optional().default(""),
  message: z.string().trim().min(10).max(3000),
  contactMethod: z.enum(["Email", "Phone", "WhatsApp"]).default("Email"),
  sourcePage: z.string().max(500).optional().default(""),
  referralSource: z.string().max(500).optional().default(""),
  utm: z.record(z.string(), z.string()).optional().default({})
});
