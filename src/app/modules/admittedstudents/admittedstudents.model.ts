import { Schema, model } from "mongoose";
import {
  AdmittedStudentModel,
  IAdmittedStudents,
} from "./admittedstudents.interface";

const AdmittedStudentSchema = new Schema<IAdmittedStudents>(
  {
    trainer: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: "user",
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
