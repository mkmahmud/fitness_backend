import { Model } from "mongoose";

export type Meal = {
  title: string;
  Index: number;
};

export interface MealData {
  mealName: string;
  time: string;
  meals: Meal[];
  afterMeal: Meal[];
}

export interface MealPlan {
  mealFor: string;
  meladded: string;
  mealTitle: string;
  mealDuration: string;
  mealData: MealData[];
  note: string;
}

export type MealPlanModel = Model<MealPlan, Record<string, unknown>>;
