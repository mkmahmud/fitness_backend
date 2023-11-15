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
exports.membershipService = void 0;
const membership_model_1 = require("./membership.model");
// Create Membership
const createMembership = (membershipData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield membership_model_1.Membership.create(membershipData);
    return result;
  });
// Get all memberships
const getAllMemberships = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield membership_model_1.Membership.find({});
    return result;
  });
// Update memberships
const updateMembership = ({ id, data }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield membership_model_1.Membership.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      },
    );
    return result;
  });
// Get Singel Memberships
const getSingelMembership = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield membership_model_1.Membership.findById({ _id: id });
    return result;
  });
// Delete membership
const deleteMembership = ({ id }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield membership_model_1.Membership.deleteOne({ _id: id });
    return result;
  });
exports.membershipService = {
  createMembership,
  getSingelMembership,
  getAllMemberships,
  updateMembership,
  deleteMembership,
};
