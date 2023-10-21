import express from "express";
import { userController } from "../user/user.controller";

const router = express.Router();

// Get Singel User
router.get("/profile", userController.user);

//   Update User
router.patch("/profile", userController.updateUser);

//  Change Password
router.patch("/change-password", userController.changePassword);

export const UserRoutes = router;
