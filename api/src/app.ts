import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.get("/health", (req: Request, res: Response) => res.sendStatus(200));

export default app;
