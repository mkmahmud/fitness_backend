import express from "express";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { UserMembershipController } from "./userMembership.controller";

const router = express.Router();

// Create User Membership
router.post(
  "/",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserMembershipController.createUserMembership
);

// Get Membership Status
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserMembershipController.getMembershipStatus
);

export const UserMembershipRoutes = router;
