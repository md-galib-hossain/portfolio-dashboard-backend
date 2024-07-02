import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SkillControllers } from "./skill.controller";
import { SkillValidation } from "./skill.validation";

const router = express.Router();

router.post(
  '/',
  validateRequest(SkillValidation.SkillCreateSchema), 
  SkillControllers.createSkill
);

router.get('/', SkillControllers.getSkills);

router.get('/:id', SkillControllers.getSingleSkill);

router.patch('/:id',validateRequest(SkillValidation.SkillUpdateSchema), SkillControllers.updateSkill);

router.delete('/:id', SkillControllers.deleteSkill);

export const SkillRoutes = router;
