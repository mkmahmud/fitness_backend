"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMembership = void 0;
const mongoose_1 = require("mongoose");
const userMembershipSchema = new mongoose_1.Schema(
  {
    planId: {
      type: mongoose_1.Schema.Types.ObjectId,
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
  },
);
exports.UserMembership = (0, mongoose_1.model)(
  "userMembership",
  userMembershipSchema,
);
