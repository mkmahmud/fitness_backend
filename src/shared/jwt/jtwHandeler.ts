import jwt, { Secret } from "jsonwebtoken";
import config from "../../app/config/config.ts";

interface JwtDataInterface {
  id: string;
  email: string;
  role: string;
}

// JWT Sign
export const jwtSign = (data: JwtDataInterface) => {
  return jwt.sign(data, config.JWT_SECRET_KEY as Secret);
};

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
