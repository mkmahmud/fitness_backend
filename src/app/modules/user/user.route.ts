import express from "express";
import { userController } from "../user/user.controller";

const router = express.Router();

// Get Singel User
router.get("/", userController.user);

export const UserRoutes = router;
