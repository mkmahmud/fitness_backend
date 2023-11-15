import { Schema, Types, model } from "mongoose";
import { IUMembership, UMembershipModal } from "./userMembership";

const userMembershipSchema = new Schema<IUMembership>(
  {
    planId: {
      type: Schema.Types.ObjectId, // Use "Schema.Types.ObjectId" here
      ref: "membership",
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    purchaseTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserMembership = model<IUMembership, UMembershipModal>(
  "userMembership",
  userMembershipSchema
);
