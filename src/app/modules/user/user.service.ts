// Logic

import { User } from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "810",
    role: "Student",
    password: "amiPass",
    name: {
      firstName: "Abu",
      middleName: "Salek",
      lastName: "arman",
    },

    gender: "male",
    email: "sab@gmail.com",
    contactNumber: "017798985",
    emergencyContactNo: "501155454",
    presentAddress: "Uganda",
    permanentAddress: "USA",
  });
  await user.save();
  return user;
};

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

// Pattern
// Route => Controller -> Service
