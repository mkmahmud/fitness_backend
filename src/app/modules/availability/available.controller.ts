import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { AvailableService } from "./available.service";
// Create Available
const createAvailable = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const result = await AvailableService.createAvailable(data);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Available Time Added  Successfully",
  });
};
//Get All Available Time
const getAllTime = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await AvailableService.getAllTime(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Available Time Retrived  Successfully",
  });
};
//Delete Available Time
const deleteTime = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await AvailableService.deleteTime(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Available Time Retrived  Successfully",
  });
};

export const AvailableController = {
  createAvailable,
  getAllTime,
  deleteTime,
};
