"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const meal_controller_1 = require("./meal.controller");
const router = express_1.default.Router();
// Create Meal
router.post(
  "/",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  meal_controller_1.Mealontroller.createMeal,
);
// Get user Meal
router.get(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  meal_controller_1.Mealontroller.getUserMeal,
);
// Update Singel Meal
router.patch(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  meal_controller_1.Mealontroller.updateMeal,
);
// Delete Singel Meal
router.delete(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  meal_controller_1.Mealontroller.deleteSingelMeal,
);
exports.MealRoutes = router;
