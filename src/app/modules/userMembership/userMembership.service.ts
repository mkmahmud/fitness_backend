import { IUMembership } from "./userMembership";
import { UserMembership } from "./userMembership.model";

// Create createUserMembership
const createUserMembership = async (
  data: Partial<IUMembership>
): Promise<Partial<IUMembership | null | Object>> => {
  data.status = true;
  const result = await UserMembership.create(data);
  return result;
};

// Get membershipstatus
const getMembershipStatus = async (
  id: string
): Promise<Partial<IUMembership | null | Object>> => {
  const result = await UserMembership.findOne({
    userid: id,
    status: true,
  }).populate({
    path: "planId",
    select: "planName", // Specify the field(s) you want to populate
  });
  return result;
};

export const UserMembershipService = {
  createUserMembership,
  getMembershipStatus,
};
