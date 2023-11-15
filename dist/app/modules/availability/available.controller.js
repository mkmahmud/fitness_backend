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
exports.AvailableController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const available_service_1 = require("./available.service");
// Create Available
const createAvailable = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result =
      yield available_service_1.AvailableService.createAvailable(data);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Available Time Added  Successfully",
    });
  });
//Get All Available Time
const getAllTime = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield available_service_1.AvailableService.getAllTime(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Available Time Retrived  Successfully",
    });
  });
//Delete Available Time
const deleteTime = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield available_service_1.AvailableService.deleteTime(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Available Time Retrived  Successfully",
    });
  });
exports.AvailableController = {
  createAvailable,
  getAllTime,
  deleteTime,
};
