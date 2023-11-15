import { Model } from "mongoose";

export interface IPlans {
  title: string;
}
export interface IMembership {
  planName: string;
  plans: IMembership[];
  price: string;
}

export type MembershipModel = Model<IMembership, Record<string, unknown>>;
