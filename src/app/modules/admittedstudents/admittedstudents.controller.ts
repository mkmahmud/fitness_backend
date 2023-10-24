import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { AdmittedStudentService } from "./admittedstudents.service";

// Create AdmittedStudents
const createAdmittesStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const result = await AdmittedStudentService.createNewStudent(data);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Student Added  Successfully",
  });
};
// Get All AdmittedStudents
const getAllAdmittesStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await AdmittedStudentService.getAllStudents(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Data retrived Successfully",
  });
};
// Get Trainner from student
const getTrainnerFromStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await AdmittedStudentService.getTrainner(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Data retrived Successfully",
  });
};
// Delete student
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await AdmittedStudentService.deleteStudent(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Student Removed Successfully",
  });
};

export const AdmittedStudentController = {
  createAdmittesStudent,
  getAllAdmittesStudent,
  getTrainnerFromStudent,
  deleteStudent,
};
