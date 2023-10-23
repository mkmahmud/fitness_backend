import { IMeal } from "./meal.interface";
import { Meal } from "./meal.model";

// Create a new user
const createmeal = async (
  mealData: Partial<IMeal>
): Promise<Partial<IMeal | null | Object>> => {
  const result = await Meal.create(mealData);
  return result;
};

// Get A Singel User Meal
const getUserMeal = async (id: string): Promise<IMeal | null | Object> => {
  const result = await Meal.find({ mealFor: id }).populate("mealFor");
  return result;
};
// Get A Singel  Meal
const getSingelMeal = async (id: string): Promise<IMeal | null | Object> => {
  const result = await Meal.findById(id).populate("mealFor");
  return result;
};

interface UpdateMeal {
  id: string;
  data: Partial<IMeal>;
}

// Update meal By Trainer and admin
const updateMeal = async ({
  id,
  data,
}: UpdateMeal): Promise<Partial<IMeal | null | Object>> => {
  // Update Meal
  const result = await Meal.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (result) {
    return data;
  } else {
    return null;
  }
};

// Delete A Singel  Meal
const deleteSingelMeal = async (id: string): Promise<IMeal | null | Object> => {
  const result = await Meal.findByIdAndDelete(id);
  return result;
};

export const MealService = {
  createmeal,
  getUserMeal,
  getSingelMeal,
  updateMeal,
  deleteSingelMeal,
};
