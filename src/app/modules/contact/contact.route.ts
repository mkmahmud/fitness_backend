import express from "express";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { ContactController } from "./contact.controller";
const router = express.Router();

// Create Meal
router.post("/send-message", ContactController.createContact);

// Get all messages
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ContactController.getAllMessage
);

// Get Singel messages
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ContactController.getSingleMessage
);

// Mark As Read messages
router.patch(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ContactController.markAsRead
);

export const ContactRoutes = router;
