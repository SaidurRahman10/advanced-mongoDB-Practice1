import { HydratedDocument, Model } from "mongoose";

// Creating an Interface
export interface IUser {
  id: string;
  role: "Student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNumber: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// instance method
export interface IUserMethods {
  fullName(): string;
}

// static
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
