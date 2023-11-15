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
exports.membershipController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const membership_service_1 = require("./membership.service");
// Create membership
const createmembership = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const membershipData = req.body;
    const result =
      yield membership_service_1.membershipService.createMembership(
        membershipData,
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Membership created Successfully",
    });
  });
// Get All membership
const getAllMemberShips = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield membership_service_1.membershipService.getAllMemberships();
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Membership Data Retrived Successfully",
    });
  });
// Update membership
const updateMembership = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id: UpdatedId } = req.params;
    const UpdatedData = req.body;
    const result =
      yield membership_service_1.membershipService.updateMembership({
        id: UpdatedId,
        data: UpdatedData,
      });
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Membership Updated Successfully",
    });
  });
// Delete membership
const deleteMembership = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Update User
    const result =
      yield membership_service_1.membershipService.deleteMembership({ id });
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Membership Updated Successfully",
    });
  });
// GEt Singel membership
const getSingelMembership = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Update User
    const result =
      yield membership_service_1.membershipService.getSingelMembership(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "Membership Data Retrived Successfully",
    });
  });
exports.membershipController = {
  createmembership,
  getSingelMembership,
  getAllMemberShips,
  updateMembership,
  deleteMembership,
};
