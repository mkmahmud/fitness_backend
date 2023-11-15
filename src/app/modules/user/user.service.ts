import config from "../../config/config";
import {
  IMembershipStatus,
  IUser,
  IUserLogin,
  IuserDetails,
} from "./user.interface";
import { User, UserDetails } from "./user.model";
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

  // Set Role
  if (userData.role) {
    userData.role = userData.role;
  } else {
    userData.role = ENUM_USER_ROLE.USER;
  }

  // Set User ID
  if (userData.role === ENUM_USER_ROLE.TRAINER) {
    userData.id = await generateTrainerId();
  } else if (userData.role === ENUM_USER_ROLE.ADMIN) {
    userData.id = await generateAdminId();
  } else if (userData.role === ENUM_USER_ROLE.USER) {
    userData.id = await generateMemberId();
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

// Get  Users from DB
const getUsers = async (role: string): Promise<IUser | null | object> => {
  const user = await User.find({ role: role }).select("-password");
  if (user) {
    return { user };
  }

  return null;
};

interface UpdateUser {
  id: string;
  data: Partial<IuserDetails>;
}

// update       user Details
const updateUser = async ({
  id,
  data,
}: UpdateUser): Promise<Partial<IuserDetails | null | Object>> => {
  const isExistUserDetails = await UserDetails.findOne({ id });
  if (isExistUserDetails) {
    // Update User
    const result = await UserDetails.findOneAndUpdate({ id }, data, {
      new: true,
    });
    return result;
  } else {
    const result = await UserDetails.create(data);
    return result;
  }
};
// Get user Details

const getUserDetails = async (id: string): Promise<IUser | null | object> => {
  const user = await UserDetails.findOne({ id });
  if (user) {
    return { user };
  }

  return null;
};
interface UpdateMembership {
  id: string;
  data: IMembershipStatus;
}

// update  Membershiip
const updateMembership = async ({
  id,
  data,
}: UpdateMembership): Promise<Partial<IUser | null | Object>> => {
  // Create an object to specify the update

  let update;
  if (data) {
    update = { membership: data };
  } else {
    update = { membership: null };
  }
  // Update User
  const result = await User.findOneAndUpdate({ id: id }, update, {
    new: true,
  }).select("-password");

  if (result) {
    return result;
  } else {
    return null;
  }
};

// Change Password

type password = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

interface UpdatePassword {
  id: string;
  data: password;
}

const changePassword = async ({
  id,
  data,
}: UpdatePassword): Promise<Partial<IUser | null | Object>> => {
  // Check Previous Password
  const user = await User.findOne({ id: id });
  if (user && typeof data.currentPassword === "string" && user.password) {
    const checkPassword = await bcrypt.compare(
      data.currentPassword,
      user.password
    );
    if (checkPassword) {
      const newHashedPassword = await bcrypt.hash(
        data.confirmNewPassword,
        Number(config.bcrypt_salt_round)
      );

      // Create User
      const result = await User.findOneAndUpdate(
        { id },
        { password: newHashedPassword }
      );

      return result;
    } else {
      return null;
    }
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
  updateMembership,
  getUsers,
  getUserDetails,
};
