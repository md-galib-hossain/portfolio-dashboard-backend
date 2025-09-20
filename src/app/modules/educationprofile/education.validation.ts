import { z } from 'zod';

export const EducationCreateSchema = z.object({
  body : z.object({
    institutionName: z.string().min(1).max(100),
    admitYear: z.string().regex(/^\d{4}$/),
    passingYear: z.string().regex(/^\d{4}$/),
    result: z.string(),
    department: z.string(),
    degreeName: z.string(),
    location: z.string(),
  })
})

export const EducationUpdateSchema = z.object({
  body : z.object({
    institutionName: z.string().min(1).max(100).optional(),
    admitYear: z.string().regex(/^\d{4}$/).optional(),
    passingYear: z.string().regex(/^\d{4}$/).optional(),
    result: z.string().optional(),
    department: z.string().optional(),
    degreeName: z.string().optional(),
    location: z.string().optional(),
  })
  
})

export const EducationValidation = { EducationUpdateSchema,EducationCreateSchema}