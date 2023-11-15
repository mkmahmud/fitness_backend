"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutineRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const routine_controller_1 = require("./routine.controller");
const router = express_1.default.Router();
// Create Routine
router.post(
  "/",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  routine_controller_1.routineController.createRoutine,
);
// Get Singel Routine
router.get(
  "/member/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  routine_controller_1.routineController.GetRoutines,
);
// Get Singel Routine
router.get(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  routine_controller_1.routineController.GetSingelRoutine,
);
exports.RoutineRoutes = router;
