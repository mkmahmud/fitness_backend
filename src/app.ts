import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";

// Cors
app.use(cors());
app.use(cookieParser());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is runing");
});

export default app;
