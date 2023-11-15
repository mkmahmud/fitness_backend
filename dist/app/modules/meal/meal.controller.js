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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mealontroller = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const meal_service_1 = require("./meal.service");
// Create Meal
const createMeal = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const mealData = req.body;
    const result = yield meal_service_1.MealService.createmeal(mealData);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Meal Created Successfully",
    });
  });
// Get Singel User Meal
const getUserMeal = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield meal_service_1.MealService.getUserMeal(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "User Meal Data Retrived Successfully",
    });
  });
// Update Meal
const updateMeal = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const UpdatedData = req.body;
    const result = yield meal_service_1.MealService.updateMeal({
      id: id,
      data: UpdatedData,
    });
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Meal Info Updated Successfully",
    });
  });
// Delete Singel  Meal
const deleteSingelMeal = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield meal_service_1.MealService.deleteSingelMeal(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Meal  Deleted Successfully",
    });
  });
exports.Mealontroller = {
  createMeal,
  getUserMeal,
  updateMeal,
  deleteSingelMeal,
};
