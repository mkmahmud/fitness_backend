import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
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
    res.cookie("user", result.jwtTocken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result ? result : null,
    message: result ? "User Logged In Successfully" : "Something went wrong",
  });
};

// Get Singel User
const user = async (req: Request, res: Response, next: NextFunction) => {
  const tocken = req.headers.authorization;
  const { id: userID } = req.query as { id: string }; // Explicitly cast req.query

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
// Get  User Details
const getUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: userID } = req.params;
  const result = await userService.getUserDetails(userID);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "User Retrieved Successfully",
  });
};

// Get Users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.params;
  const result = await userService.getUsers(role);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Users Retrieved Successfully",
  });
};

// Update Singel User
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id: UpdatedId } = req.params;
  const UpdatedData = req.body;
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
};

// Update Membership
const addMembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.query as { id: string };
  const data = req.body;

  // Update User
  const result = await userService.updateMembership({ id, data });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Membership Updated Successfully",
  });
};

// Update Password
const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: UpdatedId } = req.params;
  const UpdatedData = req.body;
  // Update User Password
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
};

export const userController = {
  createUser,
  logIn,
  user,
  updateUser,
  changePassword,
  addMembership,
  getUsers,
  getUserDetails,
};
