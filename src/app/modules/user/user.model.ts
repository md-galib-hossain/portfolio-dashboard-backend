import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    userImage: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    headline: { type: String, required: true },
    age: { type: String, required: true },
    status: { type: String, required: true },
    aboutMe: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    resumeLinkId: { type: String, required: true },

    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);