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
  routineFor: string;
  routineAdded: string;
  routines: IRoutines[];
}

export type RoutineModel = Model<IRoutine, Record<string, unknown>>;
