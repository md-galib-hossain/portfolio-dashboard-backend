import { z } from 'zod';

export const SocialProfileCreateSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100),
    link: z.string().url(),
  }),
});

export const SocialProfileUpdateSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(100).optional(),
    link: z.string().url().optional(),
  }),
});

export const SocialProfileValidation = {
  SocialProfileCreateSchema,
  SocialProfileUpdateSchema,
};
