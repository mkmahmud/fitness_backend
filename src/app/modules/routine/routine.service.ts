import { IRoutine } from "./routine.interface";
import { Routine } from "./routine.model";

// Create Routine
const createRoutine = async (
  data: Partial<IRoutine>
): Promise<Partial<IRoutine | null | Object>> => {
  const result = await Routine.create(data);
  return result;
};
// Get   Routine
const getRoutines = async (
  id: string
): Promise<Partial<IRoutine | null | Object>> => {
  const result = await Routine.find({ routineFor: id });
  return result;
};
// Get Singel Routine
const getSingelRoutine = async (
  id: string
): Promise<Partial<IRoutine | null | Object>> => {
  const result = await Routine.findById(id);
  return result;
};

export const RoutineService = {
  createRoutine,
  getRoutines,
  getSingelRoutine,
};
