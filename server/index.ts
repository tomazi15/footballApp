import { config } from "dotenv";
config();

import app from "./app";
const PORT = 4000;

import connectToMongoDB from "./db/dbConfig";

async function startServer(): Promise<void> {
  await connectToMongoDB();
  app.listen(PORT, () => {
    console.log("express server starting from port 4000");
  });
}

startServer();
