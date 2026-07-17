import { z } from "zod";

export const studentEnquirySchema = z.object({
  studentName: z
    .string()
    .trim()
    .min(2, "Student name is required"),

  parentName: z.string().optional(),

  mobile: z
    .string()
    .trim()
    .min(10)
    .max(10),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  class: z
    .string()
    .min(1, "Please select class"),

  exam: z.string().optional(),

  medium: z.string().optional(),

  learningMode: z.string().optional(),

  city: z.string().optional(),

  message: z.string().optional(),
});