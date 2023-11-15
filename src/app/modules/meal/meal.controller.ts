import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { MealService } from "./meal.service";

// Create Meal
const createMeal = async (req: Request, res: Response, next: NextFunction) => {
  const mealData = req.body;
  const result = await MealService.createmeal(mealData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Meal Created Successfully",
  });
};

// Get Singel User Meal
const getUserMeal = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await MealService.getUserMeal(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "User Meal Data Retrived Successfully",
  });
};

// Update Meal
const updateMeal = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const UpdatedData = req.body;
  const result = await MealService.updateMeal({
    id: id,
    data: UpdatedData,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Meal Info Updated Successfully",
  });
};

// Delete Singel  Meal
const deleteSingelMeal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = await MealService.deleteSingelMeal(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    data: result,
    message: "Meal  Deleted Successfully",
  });
};

export const Mealontroller = {
  createMeal,
  getUserMeal,
  updateMeal,
  deleteSingelMeal,
};
