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
exports.AvailableService = void 0;
const available_model_1 = require("./available.model");
// Create Available
const createAvailable = (data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield available_model_1.Available.create(data);
    return result;
  });
// Get All Available Time for Trainer
const getAllTime = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield available_model_1.Available.find({ trainerId: id });
    return result;
  });
// Delete Time
const deleteTime = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield available_model_1.Available.findByIdAndDelete(id);
    return result;
  });
exports.AvailableService = {
  createAvailable,
  getAllTime,
  deleteTime,
};
