import { Model, Types } from "mongoose";

export interface IRoutines {
  index: number;
  title: string;
  set: number;
  rep: number;
}

export interface IRoutine {
  routineName: string;
  duration: string;
  routineFor: Types.ObjectId;
  routineAdded: Types.ObjectId;
  routines: IRoutines[];
}

export type RoutineModel = Model<IRoutine, Record<string, unknown>>;
