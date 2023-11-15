import { MealPlan } from "./meal.interface";
import { Meal } from "./meal.model";

// Create a new Meal for user
const createmeal = async (
  mealData: Partial<MealPlan>
): Promise<Partial<MealPlan | null | Object>> => {
  const result = await Meal.create(mealData);
  return result;
};

// Get A Singel User Meal
const getUserMeal = async (id: string): Promise<MealPlan | null | Object> => {
  const result = await Meal.find({ mealFor: id });
  return result;
};

interface UpdateMeal {
  id: string;
  data: Partial<MealPlan>;
}

// Update meal By Trainer and admin
const updateMeal = async ({
  id,
  data,
}: UpdateMeal): Promise<Partial<MealPlan | null | Object>> => {
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
const deleteSingelMeal = async (
  id: string
): Promise<MealPlan | null | Object> => {
  const result = await Meal.findByIdAndDelete(id);
  return result;
};

export const MealService = {
  createmeal,
  getUserMeal,
  updateMeal,
  deleteSingelMeal,
};
