import { z } from 'zod';

export const UserCreateSchema = z.object({
  body : z.object({
    name: z.string().min(1, { message: "Name is required" }),
    userImage: z.string().url({ message: "User image must be a valid URL" }),
    role: z.string().min(1, { message: "Role is required" }),
    email: z.string().email({ message: "Email must be a valid email address" }),
    headline: z.string().min(1, { message: "Headline is required" }),
    age: z.string().min(1, { message: "Age is required" }),
    status: z.string().min(1, { message: "Status is required" }),
    aboutMe: z.string().min(1, { message: "About me is required" }),
    presentAddress: z.string().min(1, { message: "Present address is required" }),
    permanentAddress: z.string().min(1, { message: "Permanent address is required" }),
    resumeLinkId: z.string().min(1, { message: "Resume link ID is required" }),
    isDeleted: z.boolean().optional(),
  })
})

export const UserUpdateSchema = z.object({
  body : z.object({
    name: z.string().min(1, { message: "Name is required" }).optional(),
    userImage: z.string().url({ message: "User image must be a valid URL" }).optional(),
    role: z.string().min(1, { message: "Role is required" }).optional(),
    email: z.string().email({ message: "Email must be a valid email address" }).optional(),
    headline: z.string().min(1, { message: "Headline is required" }).optional(),
    age: z.string().min(1, { message: "Age is required" }).optional(),
    status: z.string().min(1, { message: "Status is required" }).optional(),
    aboutMe: z.string().min(1, { message: "About me is required" }).optional(),
    presentAddress: z.string().min(1, { message: "Present address is required" }).optional(),
    permanentAddress: z.string().min(1, { message: "Permanent address is required" }).optional(),
    resumeLinkId: z.string().min(1, { message: "Resume link ID is required" }).optional(),
    isDeleted: z.boolean().optional(),
  })
})

export const UserValidation = {UserCreateSchema,UserUpdateSchema}