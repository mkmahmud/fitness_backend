import { Model, Types } from "mongoose";

export interface IUMembership {
  planId: Types.ObjectId;
  userid: string;
  purchaseTime: string;
  endTime: string;
  totalPrice: string;
  transactionId: string;
  status: boolean;
}

export type UMembershipModal = Model<IUMembership, Record<string, unknown>>;
