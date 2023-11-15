import { Model } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  message: string;
  isRead: boolean;
}

export type ContactModel = Model<IContact, Record<string, unknown>>;
