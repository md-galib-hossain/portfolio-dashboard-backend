import { TSocialProfile } from "./social.interface";
import { SocialProfile } from "./social.model";


export const createSocialProfileIntoDb = async (socialProfileData: TSocialProfile) => {
  const result = await SocialProfile.create(socialProfileData);
  return result;
};

export const getSocialProfilesFromDb = async () => {
  const result = await SocialProfile.find();
  return result;
};

export const getSingleSocialProfile = async (id: string) => {
  const result = await SocialProfile.findById(id);
  return result;
};

export const updateSocialProfileInDb = async (id: string, socialProfileData: Partial<TSocialProfile>) => {
  const result = await SocialProfile.findByIdAndUpdate(id, socialProfileData, { new: true });
  return result;
};

export const deleteSocialProfileFromDb = async (id: string) => {
  const result = await SocialProfile.deleteOne({ _id: id });
  return result;
};

export const SocialProfileServices = {
  createSocialProfileIntoDb,
  getSocialProfilesFromDb,
  getSingleSocialProfile,
  updateSocialProfileInDb,
  deleteSocialProfileFromDb,
};
