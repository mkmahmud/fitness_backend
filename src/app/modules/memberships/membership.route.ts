import express from "express";
import { membershipController } from "./membership.controller";

const router = express.Router();

// Create Membership
router.post("/", membershipController.createmembership);

// Get Membership
router.get("/", membershipController.getAllMemberShips);

// Update Membership
router.patch("/", membershipController.updateMembership);

// Delete Membership
router.delete("/", membershipController.deleteMembership);

export const MembershipRoutes = router;
