import express from "express";
import { userController } from "../user/user.controller";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

// Get Singel User
router.get("/profile", userController.user);

//   Update User
router.patch("/profile", userController.updateUser);

//  Change Password
router.patch("/change-password", userController.changePassword);

// Add Membership status
router.post(
  "/add-membership",
  auth(ENUM_USER_ROLE.USER),
  userController.addMembership
);

export const UserRoutes = router;
