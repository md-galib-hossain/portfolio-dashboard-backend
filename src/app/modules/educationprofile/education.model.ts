import  { Schema, model } from 'mongoose';
import { TEducation } from './education.interface';



const EducationSchema: Schema = new Schema({
  institutionName: { type: String, required: true },
  admitYear: { type: String, required: true },
  passingYear: { type: String, required: true },
  result: { type: String, required: true },
  department: { type: String, required: true },
  degreeName: { type: String, required: true },
  location: { type: String, required: true },
});

export const Education = model<TEducation>('Education', EducationSchema);
