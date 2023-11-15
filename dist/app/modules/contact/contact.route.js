"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const contact_controller_1 = require("./contact.controller");
const router = express_1.default.Router();
// Create Meal
router.post(
  "/send-message",
  contact_controller_1.ContactController.createContact,
);
// Get all messages
router.get(
  "/",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.ADMIN,
    user_1.ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  contact_controller_1.ContactController.getAllMessage,
);
// Get Singel messages
router.get(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.ADMIN,
    user_1.ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  contact_controller_1.ContactController.getSingleMessage,
);
// Mark As Read messages
router.patch(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.ADMIN,
    user_1.ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  contact_controller_1.ContactController.markAsRead,
);
exports.ContactRoutes = router;
