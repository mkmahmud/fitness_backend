import express from "express";
import auth from "../../middleware/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { AdmittedStudentController } from "./admittedstudents.controller";

const router = express.Router();

// Create AddmittedStudents
router.post(
  "/",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  AdmittedStudentController.createAdmittesStudent
);

// Get All Admitted Students
router.get(
  "/all-students/:id",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  AdmittedStudentController.getAllAdmittesStudent
);

// Get Trainner from Student
router.get(
  "/get-my-trainer/:id",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  AdmittedStudentController.getTrainnerFromStudent
);
// Get Trainner from Student
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.TRAINER, ENUM_USER_ROLE.ADMIN),
  AdmittedStudentController.deleteStudent
);

export const AdmittedStudentRoutes = router;
