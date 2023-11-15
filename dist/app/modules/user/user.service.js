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
const user_1 = require("../../../enums/user");
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
    // Check Duplicate Email Address
    const isEsistEmail = yield user_model_1.User.find({
      email: userData.email,
    });
    if (isEsistEmail.length > 0) {
      return null;
    }
    // Set Role
    if (userData.role) {
      userData.role = userData.role;
    } else {
      userData.role = user_1.ENUM_USER_ROLE.USER;
    }
    // Set User ID
    if (userData.role === user_1.ENUM_USER_ROLE.TRAINER) {
      userData.id = yield (0, generateID_1.generateTrainerId)();
    } else if (userData.role === user_1.ENUM_USER_ROLE.ADMIN) {
      userData.id = yield (0, generateID_1.generateAdminId)();
    } else if (userData.role === user_1.ENUM_USER_ROLE.USER) {
      userData.id = yield (0, generateID_1.generateMemberId)();
    }
    // Create User
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
// Get  Users from DB
const getUsers = (role) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.find({ role: role }).select(
      "-password",
    );
    if (user) {
      return { user };
    }
    return null;
  });
// update       user Details
const updateUser = ({ id, data }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const isExistUserDetails = yield user_model_1.UserDetails.findOne({ id });
    if (isExistUserDetails) {
      // Update User
      const result = yield user_model_1.UserDetails.findOneAndUpdate(
        { id },
        data,
        {
          new: true,
        },
      );
      return result;
    } else {
      const result = yield user_model_1.UserDetails.create(data);
      return result;
    }
  });
// Get user Details
const getUserDetails = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.UserDetails.findOne({ id });
    if (user) {
      return { user };
    }
    return null;
  });
// update  Membershiip
const updateMembership = ({ id, data }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    // Create an object to specify the update
    let update;
    if (data) {
      update = { membership: data };
    } else {
      update = { membership: null };
    }
    // Update User
    const result = yield user_model_1.User.findOneAndUpdate(
      { id: id },
      update,
      {
        new: true,
      },
    ).select("-password");
    if (result) {
      return result;
    } else {
      return null;
    }
  });
const changePassword = ({ id, data }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    // Check Previous Password
    const user = yield user_model_1.User.findOne({ id: id });
    if (user && typeof data.currentPassword === "string" && user.password) {
      const checkPassword = yield bcrypt_1.default.compare(
        data.currentPassword,
        user.password,
      );
      if (checkPassword) {
        const newHashedPassword = yield bcrypt_1.default.hash(
          data.confirmNewPassword,
          Number(config_1.default.bcrypt_salt_round),
        );
        // Create User
        const result = yield user_model_1.User.findOneAndUpdate(
          { id },
          { password: newHashedPassword },
        );
        return result;
      } else {
        return null;
      }
    } else {
      return null;
    }
  });
exports.userService = {
  createuser,
  login,
  user,
  updateUser,
  changePassword,
  updateMembership,
  getUsers,
  getUserDetails,
};
