"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmittedStudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_1 = require("../../../enums/user");
const admittedstudents_controller_1 = require("./admittedstudents.controller");
const router = express_1.default.Router();
// Create AddmittedStudents
router.post(
  "/",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  admittedstudents_controller_1.AdmittedStudentController.createAdmittesStudent,
);
// Get All Admitted Students
router.get(
  "/all-students/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  admittedstudents_controller_1.AdmittedStudentController.getAllAdmittesStudent,
);
// Get Trainner from Student
router.get(
  "/get-my-trainer/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.USER,
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  admittedstudents_controller_1.AdmittedStudentController
    .getTrainnerFromStudent,
);
// Get Trainner from Student
router.delete(
  "/:id",
  (0, auth_1.default)(
    user_1.ENUM_USER_ROLE.TRAINER,
    user_1.ENUM_USER_ROLE.ADMIN,
  ),
  admittedstudents_controller_1.AdmittedStudentController.deleteStudent,
);
exports.AdmittedStudentRoutes = router;
