import { IAvailable } from "./available.interface";
import { Available } from "./available.model";

// Create Available
const createAvailable = async (
  data: Partial<IAvailable>
): Promise<Partial<IAvailable | null | Object>> => {
  const result = await Available.create(data);
  return result;
};

// Get All Available Time for Trainer
const getAllTime = async (
  id: string
): Promise<Partial<IAvailable | null | Object>> => {
  const result = await Available.find({ trainerId: id });
  return result;
};
// Delete Time
const deleteTime = async (
  id: string
): Promise<Partial<IAvailable | null | Object>> => {
  const result = await Available.findByIdAndDelete(id);
  return result;
};

export const AvailableService = {
  createAvailable,
  getAllTime,
  deleteTime,
};
