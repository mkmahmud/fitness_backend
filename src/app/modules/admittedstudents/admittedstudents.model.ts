import { Schema, model } from "mongoose";
import {
  AdmittedStudentModel,
  IAdmittedStudents,
} from "./admittedstudents.interface";

const AdmittedStudentSchema = new Schema<IAdmittedStudents>(
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
  }
);

export const AdmittedStudent = model<IAdmittedStudents, AdmittedStudentModel>(
  "admittedstudent",
  AdmittedStudentSchema
);
