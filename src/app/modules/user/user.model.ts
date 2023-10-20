import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

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
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  phoneNumber: {
    type: String,
  },
});

export const User = model<IUser, UserModel>("user", userSchema);
