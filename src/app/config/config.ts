/* eslint-disable no-undef */
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,
  bcrypt_salt_round: process.env.bcrypt_salt_round,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION,
};
