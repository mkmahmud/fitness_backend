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
exports.userController = void 0;
const user_service_1 = require("./user.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config/config"));
// Create User
const createUser = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const result = yield user_service_1.userService.createuser(userData);
    if (result) {
      res.cookie("user", result);
    }
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result,
      message: "User Created Successfully",
    });
  });
// Log In User
const logIn = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const result = yield user_service_1.userService.login(userData);
    if (result && "jwtTocken" in result) {
      res.cookie("user", result.jwtTocken);
    }
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_codes_1.StatusCodes.OK,
      success: true,
      data: result ? result : null,
      message: result ? "User Logged In Successfully" : "Password Not Matched",
    });
  });
// Get Singel User
const user = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.headers.cookie;
    const { id: userID } = req.query; // Explicitly cast req.query
    const tocken =
      userData === null || userData === void 0
        ? void 0
        : userData.split("=")[1];
    if (tocken) {
      try {
        const decoded = jsonwebtoken_1.default.verify(
          tocken,
          config_1.default.JWT_SECRET_KEY,
        );
        if (
          userID ===
          (decoded === null || decoded === void 0 ? void 0 : decoded.id)
        ) {
          const result = yield user_service_1.userService.user(userID);
          (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.OK,
            success: true,
            data: result,
            message: "User Retrieved Successfully",
          });
        } else {
          console.log("ID doesn't Matched");
        }
      } catch (err) {
        console.log(err);
      }
    }
  });
exports.userController = {
  createUser,
  logIn,
  user,
};
