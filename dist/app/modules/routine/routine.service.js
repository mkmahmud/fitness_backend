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
exports.RoutineService = void 0;
const routine_model_1 = require("./routine.model");
// Create Routine
const createRoutine = (data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield routine_model_1.Routine.create(data);
    return result;
  });
// Get   Routine
const getRoutines = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield routine_model_1.Routine.find({ routineFor: id });
    return result;
  });
// Get Singel Routine
const getSingelRoutine = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield routine_model_1.Routine.findById(id);
    return result;
  });
exports.RoutineService = {
  createRoutine,
  getRoutines,
  getSingelRoutine,
};
