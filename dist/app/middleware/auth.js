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
const jtwHandeler_1 = require("../../shared/jwt/jtwHandeler");
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const auth =
  (...requiredRoles) =>
  (req, res, next) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        //get authorization token
        const token = req.headers.authorization;
        if (!token) {
          throw new Error("You are not authorized midll");
        }
        // verify token
        const verifiedUser = (0, jtwHandeler_1.MyjwtVerify)(token);
        // role diye guard korar jnno
        if (
          requiredRoles.length &&
          !requiredRoles.includes(
            verifiedUser === null || verifiedUser === void 0
              ? void 0
              : verifiedUser.role,
          )
        ) {
          throw new ApiError_1.default(403, "Forbidden");
        }
        next();
      } catch (error) {
        next(error);
      }
    });
exports.default = auth;
