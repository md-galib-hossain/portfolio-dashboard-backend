import { z } from "zod";

const descriptionSchema = z.object({
  heading: z.string({ required_error: "Description heading is required" }),
  text: z.string({ required_error: "Description text is required" }),
});

const linksSchema = z.object({
  frontEnd: z
    .string({ required_error: "Frontend link is required" })
    .url({ message: "Frontend link must be a valid URL" }),
  backEnd: z
    .string({ required_error: "Backend link is required" })
    .url({ message: "Backend link must be a valid URL" }),
  liveLink: z
    .string({ required_error: "Live link is required" })
    .url({ message: "Live link must be a valid URL" }),
});

export const ProjectCreateSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }),
    coverImage: z
      .string({ required_error: "Cover image URL is required" })
      .url({ message: "Cover image must be a valid URL" }),
    images: z
      .array(z.string())
      .optional(),
    description: descriptionSchema,
    technologies: z
      .array(z.string())
      .min(1, { message: "At least one technology is required" }),
    links: linksSchema,
    isDeleted: z.boolean().optional(), 
  }),
});

export const ProjectValidation = {ProjectCreateSchema}