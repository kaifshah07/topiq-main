import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",

  PORT: Number(process.env.PORT) || 5000,

  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",

  MONGODB_URI: process.env.MONGODB_URI || "",

  SMTP_HOST: process.env.SMTP_HOST || "",
  SMTP_PORT: Number(process.env.SMTP_PORT) || 587,
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",

  MAIL_FROM: process.env.MAIL_FROM || "",

  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "",
};