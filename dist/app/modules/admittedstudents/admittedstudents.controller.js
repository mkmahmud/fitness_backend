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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmittedStudentController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const admittedstudents_service_1 = require("./admittedstudents.service");
// Create AdmittedStudents
const createAdmittesStudent = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result =
      yield admittedstudents_service_1.AdmittedStudentService.createNewStudent(
        data,
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Student Added  Successfully",
    });
  });
// Get All AdmittedStudents
const getAllAdmittesStudent = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result =
      yield admittedstudents_service_1.AdmittedStudentService.getAllStudents(
        id,
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Data retrived Successfully",
    });
  });
// Get Trainner from student
const getTrainnerFromStudent = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result =
      yield admittedstudents_service_1.AdmittedStudentService.getTrainner(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Data retrived Successfully",
    });
  });
// Delete student
const deleteStudent = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result =
      yield admittedstudents_service_1.AdmittedStudentService.deleteStudent(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Student Removed Successfully",
    });
  });
exports.AdmittedStudentController = {
  createAdmittesStudent,
  getAllAdmittesStudent,
  getTrainnerFromStudent,
  deleteStudent,
};
