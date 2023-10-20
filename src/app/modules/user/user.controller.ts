import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse.ts";
import { StatusCodes } from "http-status-codes";
import jwt, { Secret } from "jsonwebtoken";
import config from "../../config/config.ts";

// Create User
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  const result = await userService.createuser(userData);

  if (result) {
    res.cookie("user", result);
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "User Created Successfully",
  });
};
// Log In User
const logIn = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;
  const result = await userService.login(userData);

  if (result && "jwtTocken" in result) {
    res.cookie("user", result.jwtTocken);
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result ? result : null,
    message: result ? "User Logged In Successfully" : "Password Not Matched",
  });
};

// Get Singel User
const user = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.headers.cookie;
  const { id: userID } = req.query as { id: string }; // Explicitly cast req.query
  const tocken = userData?.split("=")[1];
  if (tocken) {
    try {
      const decoded = jwt.verify(tocken, config.JWT_SECRET_KEY as Secret) as {
        id: string;
      };

      if (userID === decoded?.id) {
        const result = await userService.user(userID);
        sendResponse(res, {
          statusCode: StatusCodes.OK,
          success: true,
          data: result,
          message: "User Retrieved Successfully",
        });
      } else {
        console.log("ID doesn't Matched");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const userController = {
  createUser,
  logIn,
  user,
};
