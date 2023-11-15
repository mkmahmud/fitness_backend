import { Schema, model } from "mongoose";
import { MealPlan, MealPlanModel } from "./meal.interface";

const mealSchema = new Schema<MealPlan>(
  {
    mealTitle: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    mealFor: {
      type: String,
      required: true,
    },
    meladded: {
      type: String,
      required: true,
    },
    mealDuration: {
      type: String,
      required: true,
    },
    mealData: {
      type: [
        {
          mealName: {
            type: String,
            required: true,
          },
          time: {
            type: String,
            required: true,
          },
          meals: [
            {
              title: {
                type: String,
              },
              index: {
                type: Number,
              },
            },
          ],
          afterMeal: [
            {
              title: {
                type: String,
              },
              index: {
                type: Number,
              },
            },
          ],
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Meal = model<MealPlan, MealPlanModel>("meal", mealSchema);
