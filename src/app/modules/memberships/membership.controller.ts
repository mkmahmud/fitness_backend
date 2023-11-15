import jwt, { Secret } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { membershipService } from "./membership.service";
import config from "../../config/config";

// Create membership
const createmembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const membershipData = req.body;
  const result = await membershipService.createMembership(membershipData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Membership created Successfully",
  });
};
// Get All membership
const getAllMemberShips = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await membershipService.getAllMemberships();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Membership Data Retrived Successfully",
  });
};

// Update membership
const updateMembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: UpdatedId } = req.params;
  const UpdatedData = req.body;
  const result = await membershipService.updateMembership({
    id: UpdatedId,
    data: UpdatedData,
  });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Membership Updated Successfully",
  });
};

// Delete membership
const deleteMembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  // Update User
  const result = await membershipService.deleteMembership({ id });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Membership Updated Successfully",
  });
};
// GEt Singel membership
const getSingelMembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  // Update User
  const result = await membershipService.getSingelMembership(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Membership Data Retrived Successfully",
  });
};

export const membershipController = {
  createmembership,
  getSingelMembership,
  getAllMemberShips,
  updateMembership,
  deleteMembership,
};
