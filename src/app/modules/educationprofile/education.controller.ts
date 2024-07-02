import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EducationServices } from './education.service';

export const createEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationServices.createEducationIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

export const getEducations = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationServices.getEducationsFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Educations retrieved successfully',
    data: result,
  });
});

export const getSingleEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EducationServices.getSingleEducation(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education retrieved successfully',
    data: result,
  });
});

export const updateEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const educationData = req.body;

  const result = await EducationServices.updateEducationInDb(id, educationData);

 

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education updated successfully',
    data: result,
  });
});

export const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EducationServices.deleteEducationFromDb(id);



  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education deleted successfully',
    data: result,
  });
});

export const EducationControllers = {
  createEducation,
  getEducations,
  getSingleEducation,
  updateEducation,
  deleteEducation,
};
