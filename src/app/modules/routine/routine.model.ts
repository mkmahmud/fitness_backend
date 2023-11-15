import { Schema, Types, model } from "mongoose";
import { IRoutine, RoutineModel } from "./routine.interface";

const routineSchema = new Schema<IRoutine>(
  {
    routineName: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    routines: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          index: {
            type: Number,
            required: true,
          },
          set: {
            type: Number,
            required: true,
          },
          rep: {
            type: Number,
            required: true,
          },
        },
      ],
      required: true,
    },
    routineFor: {
      type: String,
      required: true,
    },
    routineAdded: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Routine = model<IRoutine, RoutineModel>("routine", routineSchema);
