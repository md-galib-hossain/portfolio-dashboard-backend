import { Schema, model, Types } from "mongoose";

// Define schemas for nested structures
const socialProfileSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const educationSchema = new Schema({
  institutionName: { type: String, required: true },
  admitYear: { type: String, required: true },
  passingYear: { type: String, required: true },
  result: { type: String, required: true },
  department: { type: String, required: true },
  degreeName: { type: String, required: true },
});

// Define main user schema
const userSchema = new Schema({
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
  socialProfiles: [socialProfileSchema],
  educationProfiles: [educationSchema],
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

// Create models
const User = model("User", userSchema);

export default User;
