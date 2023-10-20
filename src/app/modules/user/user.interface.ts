import { Model } from "mongoose";

export type IGender = "male" | "female" | "other";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  gender?: IGender;
  id: string;
  role?: "user" | "trainer" | "admin" | "superAdmin";
  phoneNumber?: string;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
