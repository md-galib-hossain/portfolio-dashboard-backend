import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SocialProfileValidation } from './social.validation';
import { SocialProfileControllers } from './social.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(SocialProfileValidation.SocialProfileCreateSchema),
  SocialProfileControllers.createSocialProfile
);

router.get('/', SocialProfileControllers.getSocialProfiles);

router.get('/:id', SocialProfileControllers.getSingleSocialProfile);

router.patch(
  '/:id',
  validateRequest(SocialProfileValidation.SocialProfileUpdateSchema),
  SocialProfileControllers.updateSocialProfile
);

router.delete('/:id', SocialProfileControllers.deleteSocialProfile);

export const SocialProfileRoutes = router;
