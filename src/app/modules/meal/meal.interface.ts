import { Model, ObjectId, Types } from "mongoose";
import { IUser } from "../user/user.interface";

export type Meals = {
  title: string;
  index: number;
};
export interface IMeal {
  mealName: string;
  mealTime: string;
  mealId: string;
  isAfter: boolean;
  preMeals: Meals[];
  postMeals: Meals[];
  afterWorkout: Meals[];
  note: string;
  mealFor: Types.ObjectId | IUser;
  addedMeal: Types.ObjectId | IUser;
}

export type MealModel = Model<IMeal, Record<string, unknown>>;
