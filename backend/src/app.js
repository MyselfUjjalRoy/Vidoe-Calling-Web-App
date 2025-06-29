import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server); // socket instance if used

// CORS setup — update frontend URL later for production
app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

// Start the server
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(` MONGO Connected | Host: ${connectionDb.connection.host}`);

    const PORT = process.env.PORT || 8000;
    server.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error(" Failed to connect to MongoDB", err);
  }
};

start();
