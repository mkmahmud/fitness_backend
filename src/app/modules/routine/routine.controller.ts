import { NextFunction, Request, Response } from "express";
import { RoutineService } from "./routine.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

// Create Routine
const createRoutine = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const result = await RoutineService.createRoutine(data);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Routine Added  Successfully",
  });
};
// Create Routine
const GetSingelRoutine = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await RoutineService.getSingelRoutine(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Routine Data Retrived  Successfully",
  });
};

export const routineController = {
  createRoutine,
  GetSingelRoutine,
};
