import mongoose from "mongoose";

export interface IUser extends Document {
  id: string;
  username: string;
  name: string;
  image?: string;
  bio?: string;
  threads: mongoose.Types.ObjectId[];
  onboarded: boolean;
  communities: mongoose.Types.ObjectId[];
}
