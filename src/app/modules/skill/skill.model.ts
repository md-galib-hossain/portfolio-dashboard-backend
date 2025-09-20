import { Schema, model } from "mongoose";
import { TSkill } from "./skill.interface";

const SkillSchema: Schema<TSkill> = new Schema({
  name: { type: String, required: true },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  icon: { type: String },
  category: { type: String, enum: ['frontEnd', 'backEnd', 'tools'], required: true },
  priority: { type: String, enum: ['high', 'medium' ,'low'] }
});
export const Skill = model("Skill", SkillSchema);
