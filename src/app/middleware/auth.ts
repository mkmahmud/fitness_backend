import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import { MyjwtVerify } from "../../shared/jwt/jtwHandeler";
import config from "../config/config";
import ApiError from "../errors/ApiError";
const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("You are not authorized midll");
      }

      // verify token
      const verifiedUser = MyjwtVerify(token) as {
        role: string;
      };

      // role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser?.role)) {
        throw new ApiError(403, "Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
