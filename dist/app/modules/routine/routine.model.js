"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routine = void 0;
const mongoose_1 = require("mongoose");
const routineSchema = new mongoose_1.Schema(
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
  },
);
exports.Routine = (0, mongoose_1.model)("routine", routineSchema);
