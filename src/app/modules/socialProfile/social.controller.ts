import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SocialProfileServices } from './social.service';

export const createSocialProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialProfileServices.createSocialProfileIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Social profile created successfully',
    data: result,
  });
});

export const getSocialProfiles = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialProfileServices.getSocialProfilesFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Social profiles retrieved successfully',
    data: result,
  });
});

export const getSingleSocialProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SocialProfileServices.getSingleSocialProfile(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Social profile retrieved successfully',
    data: result,
  });
});

export const updateSocialProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const socialProfileData = req.body;

  const result = await SocialProfileServices.updateSocialProfileInDb(id, socialProfileData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Social profile updated successfully',
    data: result,
  });
});

export const deleteSocialProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SocialProfileServices.deleteSocialProfileFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Social profile deleted successfully',
    data: result,
  });
});

export const SocialProfileControllers = {
  createSocialProfile,
  getSocialProfiles,
  getSingleSocialProfile,
  updateSocialProfile,
  deleteSocialProfile,
};
