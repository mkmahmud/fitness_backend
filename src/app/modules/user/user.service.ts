import config from "../../config/config.ts";
import { IUser, IUserLogin } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import { jwtSign } from "../../../shared/jwt/jtwHandeler.ts";
import { generateMemberId } from "../../../shared/generateID/generateID.ts";

// Create a new user
const createuser = async (
  userData: Partial<IUser>
): Promise<Partial<IUser | null | Object>> => {
  if (typeof userData.password === "string") {
    userData.password = await bcrypt.hash(
      userData.password,
      Number(config.bcrypt_salt_round)
    );
  } else {
    throw new Error("Invalid password");
  }

  if (userData.role) {
    userData.role = userData.role;
  } else {
    const memberID = await generateMemberId();
    userData.role = "user";
    userData.id = memberID;
  }
  const result = await User.create(userData);

  if (result) {
    const jwtTocken = jwtSign({
      email: result?.email as string,
      id: result?.id as string,
      role: result?.role as string,
    });

    return jwtTocken;
  } else {
    return null;
  }
};

// Logn in user
const login = async (userData: IUserLogin): Promise<IUser | null | object> => {
  const user = await User.findOne({ email: userData.email });
  if (user && typeof userData.password === "string" && user.password) {
    const checkPassword = await bcrypt.compare(
      userData.password,
      user.password
    );
    if (checkPassword) {
      const jwtTocken = jwtSign({
        email: user?.email as string,
        id: user?.id as string,
        role: user?.role as string,
      });

      return { jwtTocken };
    } else {
      return null;
    }
  }

  return null;
};

// Get Singel User from DB
const user = async (id: string): Promise<IUser | null | object> => {
  const user = await User.findOne({ id }).select("-password");
  if (user) {
    return { user };
  }

  return null;
};

export const userService = {
  createuser,
  login,
  user,
};
