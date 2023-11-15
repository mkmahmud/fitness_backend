import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./app/routes";

// Cors
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
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
