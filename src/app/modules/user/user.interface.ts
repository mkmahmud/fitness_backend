import { Model, Types } from "mongoose";

export type IGender = "male" | "female" | "other";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IMembershipStatus {
  planID: Types.ObjectId;
  startDate: string;
  endDate: string;
}

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  id: string;
  role: "user" | "trainer" | "admin" | "superAdmin";
}

export type UserModel = Model<IUser, Record<string, unknown>>;

export interface IuserDetails {
  id: string;
  profilePhoto?: string;
  phoneNumber?: string;
  gender?: IGender;
  dateOfBirth?: string;
  presentAddress?: string;
  parmanentAddress?: string;
}

export type UserDetailsModel = Model<IuserDetails, Record<string, unknown>>;
