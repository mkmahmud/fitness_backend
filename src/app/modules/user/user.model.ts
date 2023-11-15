import { Schema, Types, model } from "mongoose";
import {
  IUser,
  IuserDetails,
  UserDetailsModel,
  UserModel,
} from "./user.interface";

const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "trainer", "user", "superAdmin"],
    required: true,
  },
});

export const User = model<IUser, UserModel>("user", userSchema);

// User Details
const UserDetilsSchema = new Schema<IuserDetails>({
  id: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
  },
  dateOfBirth: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  parmanentAddress: {
    type: String,
  },
});

export const UserDetails = model<IuserDetails, UserDetailsModel>(
  "userDetails",
  UserDetilsSchema
);
