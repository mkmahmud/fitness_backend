"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const available_controller_1 = require("./available.controller");
const router = express_1.default.Router();
// Create Available
router.post(
  "/",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  available_controller_1.AvailableController.createAvailable,
);
// Get All Available Time
router.get(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  available_controller_1.AvailableController.getAllTime,
);
// Delete Available Time
router.delete(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  available_controller_1.AvailableController.deleteTime,
);
exports.AvailableRoutes = router;
