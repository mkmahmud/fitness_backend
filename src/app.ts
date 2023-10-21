import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./app/routes";

// Cors
app.use(cors());
app.use(cookieParser());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is runing");
});

// User Router
app.use("/api/v1", routes);

export default app;
