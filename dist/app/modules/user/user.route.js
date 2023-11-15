"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../user/user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
// Get Singel User
router.get("/profile", user_controller_1.userController.user);
//   Update User
router.patch(
  "/user-details/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  user_controller_1.userController.updateUser,
);
// Get User Details
router.get(
  "/user-details/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  user_controller_1.userController.getUserDetails,
);
//   Update User
router.get(
  "/users/:role",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
    user_1.ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  user_controller_1.userController.getUsers,
);
//  Change Password
router.patch(
  "/change-password/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
    user_1.ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  user_controller_1.userController.changePassword,
);
// Add Membership status
router.post(
  "/add-membership",
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER),
  user_controller_1.userController.addMembership,
);
exports.UserRoutes = router;
