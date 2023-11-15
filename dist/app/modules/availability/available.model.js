"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Available = void 0;
const mongoose_1 = require("mongoose");
const availableSchema = new mongoose_1.Schema(
  {
    day: {
      type: String,
      enum: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      required: true,
    },
    time: {
      type: [
        {
          type: String,
          required: true,
        },
      ],
    },
    trainerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
exports.Available = (0, mongoose_1.model)("available", availableSchema);
