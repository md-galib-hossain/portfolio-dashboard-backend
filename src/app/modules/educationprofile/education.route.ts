import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EducationValidation } from './education.validation';
import { EducationControllers } from './education.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(EducationValidation.EducationCreateSchema),
  EducationControllers.createEducation
);

router.get('/', EducationControllers.getEducations);

router.get('/:id', EducationControllers.getSingleEducation);

router.patch(
  '/:id',
  validateRequest(EducationValidation.EducationUpdateSchema),
  EducationControllers.updateEducation
);

router.delete('/:id', EducationControllers.deleteEducation);

export const EducationRoutes = router;
