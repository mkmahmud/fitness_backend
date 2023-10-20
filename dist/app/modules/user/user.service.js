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
exports.userService = void 0;
const config_1 = __importDefault(require("../../config/config"));
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jtwHandeler_1 = require("../../../shared/jwt/jtwHandeler");
const generateID_1 = require("../../../shared/generateID/generateID");
// Create a new user
const createuser = (userData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (typeof userData.password === "string") {
      userData.password = yield bcrypt_1.default.hash(
        userData.password,
        Number(config_1.default.bcrypt_salt_round),
      );
    } else {
      throw new Error("Invalid password");
    }
    if (userData.role) {
      userData.role = userData.role;
    } else {
      const memberID = yield (0, generateID_1.generateMemberId)();
      userData.role = "user";
      userData.id = memberID;
    }
    const result = yield user_model_1.User.create(userData);
    if (result) {
      const jwtTocken = (0, jtwHandeler_1.jwtSign)({
        email: result === null || result === void 0 ? void 0 : result.email,
        id: result === null || result === void 0 ? void 0 : result.id,
        role: result === null || result === void 0 ? void 0 : result.role,
      });
      return jwtTocken;
    } else {
      return null;
    }
  });
// Logn in user
const login = (userData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: userData.email });
    if (user && typeof userData.password === "string" && user.password) {
      const checkPassword = yield bcrypt_1.default.compare(
        userData.password,
        user.password,
      );
      if (checkPassword) {
        const jwtTocken = (0, jtwHandeler_1.jwtSign)({
          email: user === null || user === void 0 ? void 0 : user.email,
          id: user === null || user === void 0 ? void 0 : user.id,
          role: user === null || user === void 0 ? void 0 : user.role,
        });
        return { jwtTocken };
      } else {
        return null;
      }
    }
    return null;
  });
// Get Singel User from DB
const user = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ id }).select("-password");
    if (user) {
      return { user };
    }
    return null;
  });
exports.userService = {
  createuser,
  login,
  user,
};
