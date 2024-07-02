import { TUser } from "./user.interface";
import { User } from "./user.model";

export const createUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

export const getUserFromDb = async () => {
  const result = await User.findOne({});
  return result;
};

export const updateUserInDb = async (id: string, userData: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, userData, { new: true });
  return result;
};

export const deleteUserFromDb = async (id: string) => {
  const result = await User.deleteOne({ _id: id });
  return result;
};

export const UserServices = {
  createUser,
  getUserFromDb,
  updateUserInDb,
  deleteUserFromDb,
};
