/* eslint-disable no-undef */
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,
};
