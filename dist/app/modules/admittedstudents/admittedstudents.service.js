"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmittedStudentService = void 0;
const admittedstudents_model_1 = require("./admittedstudents.model");
// Assign trainer
const createNewStudent = (data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admittedstudents_model_1.AdmittedStudent.create(data);
    return result;
  });
// Get All Students for Trainner
const getAllStudents = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admittedstudents_model_1.AdmittedStudent.find({
      trainer: id,
    });
    return result;
  });
// Get Trainner from student
const getTrainner = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admittedstudents_model_1.AdmittedStudent.find({
      student: id,
    }).populate({
      path: "trainer",
      select: "-password",
    });
    return result;
  });
// Delete  student
const deleteStudent = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield admittedstudents_model_1.AdmittedStudent.findOneAndDelete({
        student: id,
      });
    return result;
  });
exports.AdmittedStudentService = {
  createNewStudent,
  getAllStudents,
  getTrainner,
  deleteStudent,
};
