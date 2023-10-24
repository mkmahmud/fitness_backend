import { Model, Types } from "mongoose";

export interface IAdmittedStudents {
  trainer: Types.ObjectId;
  student: Types.ObjectId;
}

export type AdmittedStudentModel = Model<
  IAdmittedStudents,
  Record<string, unknown>
>;
