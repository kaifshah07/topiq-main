import app from "./app";
import { env } from "./config/env";
import { connectDatabase } from "./config/database";

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(env.PORT, () => {
      console.log(`🚀 TopIQ Backend running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();