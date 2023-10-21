import jwt, { Secret } from "jsonwebtoken";
import config from "../../app/config/config";

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
export const MyjwtVerify = (token: string): JwtDataInterface | null => {
  try {
    const decoded = jwt.verify(
      token,
      config.JWT_SECRET_KEY as Secret
    ) as JwtDataInterface;
    return decoded;
  } catch (error) {
    // If the token is invalid or expired, jwt.verify will throw an error.
    // You can handle the error as needed.
    return null;
  }
};
