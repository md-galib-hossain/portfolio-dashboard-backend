import { z } from 'zod';

export const BlogPostCreateSchema = z.object({
  body : z.object({
    title: z.string().min(1, "Title is required"),
    publishDate: z.string(),
    coverImage: z.string().url("Cover image must be a valid URL"),
    images: z.array(z.string().url("Each image must be a valid URL")).optional(),
    excerpt: z.string().min(1, "Excerpt is required"),
    content: z.string().min(1, "Content is required"),
    tags: z.array(z.string().min(1, "Each tag must be a non-empty string")),
    category: z.string().min(1, "Category is required"),
    estimatedReadingTime: z.number().min(1, "Estimated reading time must be at least 1 minute"),
    isDeleted: z.boolean().optional(),
  })
});

export const BlogPostValidation = {
  BlogPostCreateSchema,
};
