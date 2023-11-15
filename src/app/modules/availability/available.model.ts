import { Schema, Types, model } from "mongoose";
import { AvailableModal, IAvailable } from "./available.interface";

const availableSchema = new Schema<IAvailable>(
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
  }
);

export const Available = model<IAvailable, AvailableModal>(
  "available",
  availableSchema
);
