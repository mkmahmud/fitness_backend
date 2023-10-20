"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../app/config/config"));
// JWT Sign
const jwtSign = (data) => {
  return jsonwebtoken_1.default.sign(data, config_1.default.JWT_SECRET_KEY);
};
exports.jwtSign = jwtSign;
// JWT verify
// export const MyjwtVerify = (token: string): JwtDataInterface | null => {
//   try {
//     const decoded = jwt.verify(
//       token,
//       config.JWT_SECRET_KEY as Secret
//     ) as JwtDataInterface;
//     return decoded;
//   } catch (error) {
//     return null;
//   }
// };
