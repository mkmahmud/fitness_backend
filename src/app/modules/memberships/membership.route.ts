import express from "express";
import { membershipController } from "./membership.controller";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

// Create Membership
router.post(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  membershipController.createmembership
);

// Get Memberships
router.get("/", membershipController.getAllMemberShips);

// Update Membership
router.patch(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  membershipController.updateMembership
);

// Delete Membership
router.delete(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  membershipController.deleteMembership
);

export const MembershipRoutes = router;
