import express from "express";
import { userController } from "../user/user.controller";

const router = express.Router();

// Create User
router.post("/register", userController.createUser);

// Log In
router.post("/login", userController.logIn);

export const AuthRoutes = router;
