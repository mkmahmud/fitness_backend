import { User } from "../../app/modules/user/user.model";
import { ENUM_USER_ROLE } from "../../enums/user";

// Member Id
export const generateMemberId = async () => {
  const totalUser = await User.find({ role: ENUM_USER_ROLE.USER });
  let memberId = totalUser ? `M-000${totalUser.length + 1}` : "M-00001";
  return memberId;
};

// Trainer Id
export const generateTrainerId = async () => {
  const totalUser = await User.find({ role: ENUM_USER_ROLE.TRAINER });
  let trainerId = totalUser ? `T-000${totalUser.length + 1}` : "T-00001";
  return trainerId;
};
export const generateAdminId = async () => {
  const totalUser = await User.find({ role: ENUM_USER_ROLE.ADMIN });
  let adminId = totalUser ? `A-000${totalUser.length + 1}` : "A-00001";
  return adminId;
};
