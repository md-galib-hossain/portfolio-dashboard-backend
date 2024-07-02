import { z } from 'zod';

export const SkillCreateSchema = z.object({
body : z.object({
  name: z.string().min(1).max(50),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  icon: z.string().optional(),
  category: z.enum(['frontEnd', 'backEnd', 'tools']),
  priority: z.enum(['high', 'medium', 'low']).optional(),
})
})

export const SkillUpdateSchema = z.object({
  body : z.object({
    name: z.string().min(1).max(50).optional(),
    level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    icon: z.string().optional(),
    category: z.enum(['frontEnd', 'backEnd', 'tools']).optional(),
    priority: z.enum(['high', 'medium', 'low']).optional(),
  })
})

export const SkillValidation = {SkillCreateSchema,SkillUpdateSchema}