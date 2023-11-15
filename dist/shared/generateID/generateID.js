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
exports.generateAdminId =
  exports.generateTrainerId =
  exports.generateMemberId =
    void 0;
const user_model_1 = require("../../app/modules/user/user.model");
const user_1 = require("../../enums/user");
// Member Id
const generateMemberId = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const totalUser = yield user_model_1.User.find({
      role: user_1.ENUM_USER_ROLE.USER,
    });
    let memberId = totalUser ? `M-000${totalUser.length + 1}` : "M-00001";
    return memberId;
  });
exports.generateMemberId = generateMemberId;
// Trainer Id
const generateTrainerId = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const totalUser = yield user_model_1.User.find({
      role: user_1.ENUM_USER_ROLE.TRAINER,
    });
    let trainerId = totalUser ? `T-000${totalUser.length + 1}` : "T-00001";
    return trainerId;
  });
exports.generateTrainerId = generateTrainerId;
const generateAdminId = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const totalUser = yield user_model_1.User.find({
      role: user_1.ENUM_USER_ROLE.ADMIN,
    });
    let adminId = totalUser ? `A-000${totalUser.length + 1}` : "A-00001";
    return adminId;
  });
exports.generateAdminId = generateAdminId;
