import { z } from "zod";

export const franchiseEnquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name is required"),

  mobile: z
    .string()
    .trim()
    .length(10, "Mobile number must be 10 digits"),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  city: z
    .string()
    .trim()
    .min(2, "City is required"),

  district: z
    .string()
    .trim()
    .min(2, "District is required"),

  state: z
    .string()
    .trim()
    .min(2, "State is required"),

  business: z
    .string()
    .trim()
    .min(2, "Current business is required"),

  investment: z
    .string()
    .trim()
    .min(1, "Investment capacity is required"),

  location: z
    .string()
    .trim()
    .min(2, "Preferred location is required"),

  message: z.string().optional(),
});