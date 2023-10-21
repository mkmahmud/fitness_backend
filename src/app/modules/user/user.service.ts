import config from "../../config/config";
import { IUser, IUserLogin } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import { jwtSign } from "../../../shared/jwt/jtwHandeler";
import {
  generateAdminId,
  generateMemberId,
  generateTrainerId,
} from "../../../shared/generateID/generateID";
import { ENUM_USER_ROLE } from "../../../enums/user";

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

  // Check Duplicate Email Address
  const isEsistEmail = await User.find({ email: userData.email });
  if (isEsistEmail.length > 0) {
    return null;
  }

  // Set User ID
  if (userData.role === ENUM_USER_ROLE.TRAINER) {
    userData.id = await generateTrainerId();
  } else if (userData.role === ENUM_USER_ROLE.ADMIN) {
    userData.id = await generateAdminId();
  } else if (userData.role === ENUM_USER_ROLE.USER) {
    userData.id = await generateMemberId();
  }

  // Set Role
  if (userData.role) {
    userData.role = userData.role;
  } else {
    userData.role = ENUM_USER_ROLE.USER;
  }

  // Create User
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

interface UpdateUser {
  id: string;
  data: Partial<IUser>;
}

// update   a new user
const updateUser = async ({
  id,
  data,
}: UpdateUser): Promise<Partial<IUser | null | Object>> => {
  // Create User
  const result = await User.findOneAndUpdate({ id }, data, {
    new: true,
  });

  if (result) {
    return data;
  } else {
    return null;
  }
};

// Change Password

type password = {
  password: string;
};

interface UpdatePassword {
  id: string;
  data: password;
}

const changePassword = async ({
  id,
  data,
}: UpdatePassword): Promise<Partial<IUser | null | Object>> => {
  // Hash password
  if (typeof data.password === "string") {
    data.password = await bcrypt.hash(
      data.password,
      Number(config.bcrypt_salt_round)
    );
  } else {
    throw new Error("Invalid password");
  }

  // Create User
  const result = await User.findOneAndUpdate({ id }, data, {
    new: true,
  });

  if (result) {
    return data;
  } else {
    return null;
  }
};

export const userService = {
  createuser,
  login,
  user,
  updateUser,
  changePassword,
};
