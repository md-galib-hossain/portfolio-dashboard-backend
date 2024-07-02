import { Schema, model } from 'mongoose';

const descriptionSchema = new Schema({
  heading: { type: String, required: true },
  text: { type: String, required: true },
});

const projectSchema = new Schema({
  title: { type: String, required: true },
  coverImage: { type: String, required: true },
  images: { type: [String] },
  description: { type: descriptionSchema, required: true },
  technologies: { type: [String], required: true },
  links: {
    frontEnd: { type: String, required: true },
    backEnd: { type: String, required: true },
    liveLink: { type: String, required: true },
  },
  isDeleted: { type: Boolean, default: false }, 
}, { timestamps: true });

export const Project = model('Project', projectSchema);


