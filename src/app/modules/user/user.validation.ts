import { z } from 'zod';

const socialProfileSchema = z.object({
  name: z.string({ required_error: "Profile name is required" }),
  link: z.string({ required_error: "Profile link is required" }).url({ message: "Profile link must be a valid URL" }),
});

const educationSchema = z.object({
  institutionName: z.string({ required_error: "Institution name is required" }),
  admitYear: z.string({ required_error: "Admit year is required" }),
  passingYear: z.string({ required_error: "Passing year is required" }),
  result: z.string({ required_error: "Result is required" }),
  department: z.string({ required_error: "Department is required" }),
  degreeName: z.string({ required_error: "Degree name is required" }),
});

const userLanguageSchema = z.object({
  type: z.string({ required_error: "Language type is required" }),
  level: z.string({ required_error: "Language level is required" }),
  writing: z.boolean(),
});

const userSchema = z.object({
  body : z.object({
    name: z.string({ required_error: "Name is required" }),
    userImage: z.string({ required_error: "User image is required" }).url({ message: "User image must be a valid URL" }),
    role: z.string({ required_error: "Role is required" }),
    email: z.string({ required_error: "Email is required" }).email({ message: "Email must be a valid email address" }),
    headline: z.string({ required_error: "Headline is required" }),
    age: z.string({ required_error: "Age is required" }),
    status: z.string({ required_error: "Status is required" }),
    aboutMe: z.string({ required_error: "About me is required" }),
    presentAddress: z.string({ required_error: "Present address is required" }),
    permanentAddress: z.string({ required_error: "Permanent address is required" }),
    resumeLinkId: z.string({ required_error: "Resume link ID is required" }),
    socialProfiles: z.array(socialProfileSchema).optional(),
    educationProfiles: z.array(educationSchema).optional(),
    languages: z.array(userLanguageSchema).nonempty({ message: "Languages are required" }),
  })
})

export const UserValidation = { userSchema };
