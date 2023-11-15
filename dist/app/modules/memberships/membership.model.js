"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Membership = void 0;
const mongoose_1 = require("mongoose");
const membershipSchema = new mongoose_1.Schema(
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
  },
);
exports.Membership = (0, mongoose_1.model)("membership", membershipSchema);
