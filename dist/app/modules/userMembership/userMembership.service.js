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
exports.UserMembershipService = void 0;
const userMembership_model_1 = require("./userMembership.model");
// Create createUserMembership
const createUserMembership = (data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    data.status = true;
    const result = yield userMembership_model_1.UserMembership.create(data);
    return result;
  });
// Get membershipstatus
const getMembershipStatus = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userMembership_model_1.UserMembership.findOne({
      userid: id,
      status: true,
    }).populate({
      path: "planId",
      select: "planName", // Specify the field(s) you want to populate
    });
    return result;
  });
exports.UserMembershipService = {
  createUserMembership,
  getMembershipStatus,
};
