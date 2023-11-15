import { Schema, model } from "mongoose";
import { IMembership, MembershipModel } from "./membership.interface";

const membershipSchema = new Schema<IMembership>(
  {
    planName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    plans: [
      {
        title: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Membership = model<IMembership, MembershipModel>(
  "membership",
  membershipSchema
);
