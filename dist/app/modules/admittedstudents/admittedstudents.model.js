"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmittedStudent = void 0;
const mongoose_1 = require("mongoose");
const AdmittedStudentSchema = new mongoose_1.Schema(
  {
    trainer: {
      type: String,
      required: true,
    },
    student: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
exports.AdmittedStudent = (0, mongoose_1.model)(
  "admittedstudent",
  AdmittedStudentSchema,
);
