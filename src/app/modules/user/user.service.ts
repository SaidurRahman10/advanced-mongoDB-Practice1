// Logic

import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); // User -> class & user -> instance
  await user.save(); // built in instance methods custom instance methods
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();

  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const users = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return users;
};

export const getAllAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};

//  Class -> Attach -> Method -> Directly call using Class
// user = new User
// user. instance methods
// User. getAdminUsers()
