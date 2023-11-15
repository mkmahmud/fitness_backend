import { Model, model } from "mongoose";

export interface IAvailable {
  day:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  time: [string];
  trainerId: string;
}

export type AvailableModal = Model<IAvailable, Record<string, unknown>>;
