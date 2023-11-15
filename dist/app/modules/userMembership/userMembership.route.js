"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMembershipRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const userMembership_controller_1 = require("./userMembership.controller");
const router = express_1.default.Router();
// Create User Membership
router.post(
  "/",
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN),
  userMembership_controller_1.UserMembershipController.createUserMembership,
);
// Get Membership Status
router.get(
  "/:id",
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN),
  userMembership_controller_1.UserMembershipController.getMembershipStatus,
);
exports.UserMembershipRoutes = router;
