import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import routes from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://topiq-main.vercel.app/", 
    ],
    credentials: true,
  })
);

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.use(errorHandler);

export default app;