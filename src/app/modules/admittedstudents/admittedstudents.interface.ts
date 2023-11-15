import { Model, Types } from "mongoose";

export interface IAdmittedStudents {
  trainer: string;
  student: string;
}

export type AdmittedStudentModel = Model<
  IAdmittedStudents,
  Record<string, unknown>
>;
