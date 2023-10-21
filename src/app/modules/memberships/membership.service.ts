import { IMembership } from "./membership.interface";
import { Membership } from "./membership.model";

// Create Membership
const createMembership = async (
  membershipData: Partial<IMembership>
): Promise<Partial<IMembership | null | Object>> => {
  const result = await Membership.create(membershipData);

  return result;
};

// Get all memberships
const getAllMemberships = async () => {
  const result = await Membership.find({});
  return result;
};

interface UpdateUser {
  id: string;
  data: Partial<IMembership>;
}

// Get all memberships
const updateMembership = async ({ id, data }: UpdateUser) => {
  const result = await Membership.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

interface IID {
  id: string;
}

// Delete membership
const deleteMembership = async ({ id }: IID) => {
  const result = await Membership.deleteOne({ _id: id });
  return result;
};

export const membershipService = {
  createMembership,
  getAllMemberships,
  updateMembership,
  deleteMembership,
};
