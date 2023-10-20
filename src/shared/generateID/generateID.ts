import { User } from "../../app/modules/user/user.model";

export const generateMemberId = async () => {
  const totalUser = await User.find();
  let memberId = totalUser ? `M-000${totalUser.length + 1}` : "M-00001";
  return memberId;
};
