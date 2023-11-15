"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
const mongoose_1 = require("mongoose");
const mealSchema = new mongoose_1.Schema(
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
  },
);
exports.Meal = (0, mongoose_1.model)("meal", mealSchema);
