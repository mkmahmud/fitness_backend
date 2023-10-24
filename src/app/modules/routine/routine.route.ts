import express from "express";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { routineController } from "./routine.controller";

const router = express.Router();

// Create Routine
router.post(
  "/",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  routineController.createRoutine
);
// Get Singel Routine
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  routineController.GetSingelRoutine
);
export const RoutineRoutes = router;
