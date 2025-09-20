import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

const getSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getSkillsFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills retrieved successfully',
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.getSingleSkill(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill retrieved successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const skillData = req.body;

  const result = await SkillServices.updateSkillInDb(id, skillData);



  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.deleteSkillFromDb(id);

 

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
})

export const SkillControllers = {
  createSkill,
  getSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
