import { TEducation } from './education.interface';
import { Education } from './education.model';

export const createEducationIntoDb = async (educationData: TEducation) => {
  const result = await Education.create(educationData);
  return result;
};

export const getEducationsFromDb = async () => {
  const result = await Education.find();
  return result;
};

export const getSingleEducation = async (id: string) => {
  const result = await Education.findById(id);
  return result;
};

export const updateEducationInDb = async (id: string, educationData: Partial<TEducation>) => {
  const result = await Education.findByIdAndUpdate(id, educationData, { new: true });
  return result;
};

export const deleteEducationFromDb = async (id: string) => {
  const result = await Education.deleteOne({ _id: id });
  return result;
};

export const EducationServices = {
  createEducationIntoDb,
  getEducationsFromDb,
  getSingleEducation,
  updateEducationInDb,
  deleteEducationFromDb,
};
