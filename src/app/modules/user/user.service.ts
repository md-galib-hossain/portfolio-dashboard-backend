import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser, TSocialProfile, TEducation } from "./user.interface";
import User from "./user.model";


const createUser = async (payload : any) => {
  const result = await User.create(payload)
  
   return result
 
};

const getUserFromDb = async () => {
  const result = await User.findOne({})
console.log(result)
  return result;
};


const updateUser = async (updateData: Partial<TUser>) => {
  try {
    let existingUser = await User.findOne({});

    if (!existingUser) {
      throw new AppError(400, `User not found`);
    }

    // Merge updateData into existingUser using Object.assign
    Object.assign(existingUser, updateData);

    // Handle immutability for socialProfiles
    if (updateData.socialProfiles) {
      const updatedSocialProfiles: TSocialProfile[] = updateData.socialProfiles as TSocialProfile[];
      existingUser.socialProfiles.forEach((profile, index) => {
        const updatedProfile = updatedSocialProfiles.find(p => p._id?.toString() === profile._id?.toString());
        if (updatedProfile) {
          // Update properties of the subdocument
          existingUser.socialProfiles[index].name = updatedProfile.name;
          existingUser.socialProfiles[index].link = updatedProfile.link;
        }
      });
    }

    // Handle immutability for educationProfiles
    if (updateData.educationProfiles) {
      const updatedEducationProfiles: TEducation[] = updateData.educationProfiles as TEducation[];
      existingUser.educationProfiles.forEach((profile, index) => {
        const updatedProfile = updatedEducationProfiles.find(p => p._id?.toString() === profile._id?.toString());
        if (updatedProfile) {
          // Update properties of the subdocument
          existingUser.educationProfiles[index].institutionName = updatedProfile.institutionName;
          existingUser.educationProfiles[index].admitYear = updatedProfile.admitYear;
          existingUser.educationProfiles[index].passingYear = updatedProfile.passingYear;
          existingUser.educationProfiles[index].result = updatedProfile.result;
          existingUser.educationProfiles[index].department = updatedProfile.department;
          existingUser.educationProfiles[index].degreeName = updatedProfile.degreeName;
        }
      });
    }

    // Save the updated user document
    const updatedUser = await existingUser.save();
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};


  

export const UserServices = { createUser, getUserFromDb,updateUser };
