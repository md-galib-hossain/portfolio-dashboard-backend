import { TSkill } from "./skill.interface";
import { Skill } from "./skill.model";


export const createSkillIntoDb = async (skillData: TSkill) => {
  const result = await Skill.create(skillData);
  return result;
};

export const getSkillsFromDb = async () => {
  const result = await Skill.find();
  return result;
};
export const updateSkillInDb = async (id: string, skillData: TSkill) => {
  const result = await Skill.findByIdAndUpdate(id, skillData, { new: true });
  return result;
};
export const deleteSkillFromDb = async (id: string) => {
  const result = await Skill.deleteOne({_id : id});
  return result;
};

export const getSingleSkill = async (id: string) => {
  const result = await Skill.findById(id);
  return result;
};

export const SkillServices = {
  createSkillIntoDb,
  getSkillsFromDb,
  getSingleSkill,deleteSkillFromDb,updateSkillInDb
};
