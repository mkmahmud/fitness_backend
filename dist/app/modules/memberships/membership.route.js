"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipRoutes = void 0;
const express_1 = __importDefault(require("express"));
const membership_controller_1 = require("./membership.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
// Create Membership
router.post(
  "/",
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  membership_controller_1.membershipController.createmembership,
);
// Get Memberships
router.get("/", membership_controller_1.membershipController.getAllMemberShips);
// Update Membership
router.patch(
  "/:id",
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  membership_controller_1.membershipController.updateMembership,
);
// Delete Membership
router.delete(
  "/:id",
  (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN),
  membership_controller_1.membershipController.deleteMembership,
);
// Get Singel Membership
router.get(
  "/singel-membership/:id",
  membership_controller_1.membershipController.getSingelMembership,
);
exports.MembershipRoutes = router;
