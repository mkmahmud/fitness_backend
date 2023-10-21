import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { MyjwtVerify } from "../../../shared/jwt/jtwHandeler";
import jwt, { Secret } from "jsonwebtoken";
import config from "../../config/config";

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
        sendResponse(res, {
          statusCode: StatusCodes.UNAUTHORIZED,
          success: false,
          data: null,
          message: "Unauthorized",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

// Update Singel User
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id: UpdatedId } = req.query as { id: string };
  const UpdatedData = req.body;
  // User Tocken Data
  const userData = req.headers.cookie;
  const tocken = userData?.split("=")[1];
  if (tocken) {
    try {
      const decoded = jwt.verify(tocken, config.JWT_SECRET_KEY as Secret) as {
        id: string;
      };
      // Check Valid User
      if (UpdatedId === decoded.id) {
        // Update User
        const result = await userService.updateUser({
          id: UpdatedId,
          data: UpdatedData,
        });

        sendResponse(res, {
          statusCode: StatusCodes.OK,
          success: true,
          data: result,
          message: "User Info Updated Successfully",
        });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    sendResponse(res, {
      statusCode: StatusCodes.UNAUTHORIZED,
      success: false,
      data: null,
      message: "UNAuthorized ",
    });
  }
};

// Update Singel User
const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: UpdatedId } = req.query as { id: string };
  const UpdatedData = req.body;
  // User Tocken Data
  const userData = req.headers.cookie;
  const tocken = userData?.split("=")[1];
  if (tocken) {
    try {
      const decoded = jwt.verify(tocken, config.JWT_SECRET_KEY as Secret) as {
        id: string;
      };
      // Check Valid User
      if (UpdatedId === decoded.id) {
        // Update User
        const result = await userService.changePassword({
          id: UpdatedId,
          data: UpdatedData,
        });

        sendResponse(res, {
          statusCode: StatusCodes.OK,
          success: true,
          data: true,
          message: "User Password Updated Successfully",
        });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    sendResponse(res, {
      statusCode: StatusCodes.UNAUTHORIZED,
      success: false,
      data: null,
      message: "UNAuthorized ",
    });
  }
};

export const userController = {
  createUser,
  logIn,
  user,
  updateUser,
  changePassword,
};
