import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

import { UserMembershipService } from "./userMembership.service";

// Create User Memberships
const createUserMembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const result = await UserMembershipService.createUserMembership(data);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Membership Added  Successfully",
  });
};
// Get  User Memberships Status
const getMembershipStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await UserMembershipService.getMembershipStatus(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Data Retrived  Successfully",
  });
};

export const UserMembershipController = {
  createUserMembership,
  getMembershipStatus,
};
