import express from "express";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { AvailableController } from "./available.controller";

const router = express.Router();

// Create Available
router.post(
  "/",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  AvailableController.createAvailable
);
// Get All Available Time
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  AvailableController.getAllTime
);
// Delete Available Time
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  AvailableController.deleteTime
);

export const AvailableRoutes = router;
