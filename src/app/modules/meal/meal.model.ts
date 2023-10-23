import { Schema, Types, model } from "mongoose";
import { IMeal, MealModel, Meals } from "./meal.interface";

const mealchema = new Schema<IMeal>(
  {
    mealName: {
      type: String,
      required: true,
    },
    mealTime: {
      type: String,
      required: true,
    },
    mealId: {
      type: String,
      required: true,
    },
    isAfter: {
      type: Boolean,
      required: true,
    },
    preMeals: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          index: {
            type: Number, // Corrected to specify a number type
            required: true,
          },
        },
      ],
      required: true,
    },
    postMeals: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          index: {
            type: Number, // Corrected to specify a number type
            required: true,
          },
        },
      ],
      required: true,
    },
    afterWorkout: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          index: {
            title: { type: Number, required: true },
          },
        },
      ],
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    mealFor: {
      type: Types.ObjectId,
      reference: "user",
      required: true,
    },
    addedMeal: {
      type: Types.ObjectId,
      reference: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Meal = model<IMeal, MealModel>("meal", mealchema);
