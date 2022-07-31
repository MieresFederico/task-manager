import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import api from "./routes";

dotenv.config();

mongoose.connect(`${process.env.MONGODB_URI}`).then(() => {
  console.log("MongoDB is connected successfully.");
});

const app: Express = express();

app.use(express.json());
app.get("/health", (req: Request, res: Response) => res.sendStatus(200));

app.use("/api", api);

export default app;
