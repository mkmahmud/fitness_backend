import express from "express";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { Mealontroller } from "./meal.controller";

const router = express.Router();

// Create Meal
router.post(
  "/",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  Mealontroller.createMeal
);

// Get user Meal
router.get(
  "/",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  Mealontroller.getUserMeal
);

// Get Singel Meal
router.get(
  "/singel-meal/",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  Mealontroller.getSingelMeal
);

// Update Singel Meal
router.patch(
  "/",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  Mealontroller.updateMeal
);

// Delete Singel Meal
router.delete(
  "/",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  Mealontroller.deleteSingelMeal
);

export const MealRoutes = router;
