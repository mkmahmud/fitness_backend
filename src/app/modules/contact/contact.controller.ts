import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { ContactService } from "./contact.service";

// Create Contact
const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactData = req.body;
  const result = await ContactService.createContat(contactData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Message Sent Successfully",
  });
};

// Get All Contact
const getAllMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await ContactService.getAllMessage();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Message Data retrived Successfully",
  });
};

// Get Single Messageq
const getSingleMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await ContactService.getSingleMessage(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Message Data retrived Successfully",
  });
};

// Mark as read Message
const markAsRead = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await ContactService.markAsRead(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Message  Updated Successfully",
  });
};

export const ContactController = {
  createContact,
  getAllMessage,
  getSingleMessage,
  markAsRead,
};
