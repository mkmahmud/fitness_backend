"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealService = void 0;
const meal_model_1 = require("./meal.model");
// Create a new Meal for user
const createmeal = (mealData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meal_model_1.Meal.create(mealData);
    return result;
  });
// Get A Singel User Meal
const getUserMeal = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meal_model_1.Meal.find({ mealFor: id });
    return result;
  });
// Update meal By Trainer and admin
const updateMeal = ({ id, data }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    // Update Meal
    const result = yield meal_model_1.Meal.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (result) {
      return data;
    } else {
      return null;
    }
  });
// Delete A Singel  Meal
const deleteSingelMeal = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meal_model_1.Meal.findByIdAndDelete(id);
    return result;
  });
exports.MealService = {
  createmeal,
  getUserMeal,
  updateMeal,
  deleteSingelMeal,
};
