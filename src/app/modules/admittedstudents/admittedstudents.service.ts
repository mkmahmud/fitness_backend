import { IAdmittedStudents } from "./admittedstudents.interface";
import { AdmittedStudent } from "./admittedstudents.model";

// Assign trainer
const createNewStudent = async (
  data: IAdmittedStudents
): Promise<IAdmittedStudents | null | Object> => {
  const result = await AdmittedStudent.create(data);
  return result;
};

// Get All Students for Trainner
const getAllStudents = async (id: string): Promise<Object | null> => {
  const result = await AdmittedStudent.find({ trainer: id });
  return result;
};

// Get Trainner from student
const getTrainner = async (id: string): Promise<Object | null> => {
  const result = await AdmittedStudent.find({ student: id }).populate({
    path: "trainer",
    select: "-password",
  });

  return result;
};
// Delete  student
const deleteStudent = async (id: string): Promise<Object | null> => {
  const result = await AdmittedStudent.findOneAndDelete({
    student: id,
  });

  return result;
};

export const AdmittedStudentService = {
  createNewStudent,
  getAllStudents,
  getTrainner,
  deleteStudent,
};
