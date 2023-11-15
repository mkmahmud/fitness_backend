import express from "express";
import { userController } from "../user/user.controller";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

// Get Singel User
router.get("/profile", userController.user);

//   Update User
router.patch(
  "/user-details/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  userController.updateUser
);

// Get User Details
router.get(
  "/user-details/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  userController.getUserDetails
);

//   Update User
router.get(
  "/users/:role",
  auth(
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.TRAINER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  userController.getUsers
);

//  Change Password
router.patch(
  "/change-password/:id",
  auth(
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.TRAINER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  userController.changePassword
);

// Add Membership status
router.post(
  "/add-membership",
  auth(ENUM_USER_ROLE.USER),
  userController.addMembership
);

export const UserRoutes = router;
