"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyjwtVerify = exports.jwtSign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../app/config/config"));
// JWT Sign
const jwtSign = (data) => {
  return jsonwebtoken_1.default.sign(data, config_1.default.JWT_SECRET_KEY);
};
exports.jwtSign = jwtSign;
// JWT verify
const MyjwtVerify = (token) => {
  try {
    const decoded = jsonwebtoken_1.default.verify(
      token,
      config_1.default.JWT_SECRET_KEY,
    );
    return decoded;
  } catch (error) {
    // If the token is invalid or expired, jwt.verify will throw an error.
    // You can handle the error as needed.
    return null;
  }
};
exports.MyjwtVerify = MyjwtVerify;
