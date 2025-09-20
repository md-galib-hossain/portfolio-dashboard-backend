import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
 
    const result = await ProjectServices.createProject(req.body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project is created succesfully',
      data: result,
    });
  });
const getProjects = catchAsync(async (req, res) => {
 
    const result = await ProjectServices.getProjects()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Projects are retrieved succesfully',
      data: result,
    });
  });
const getSingleProject = catchAsync(async (req, res) => {
 const {id} = req.params
    const result = await ProjectServices.getSingleProject(id)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project is retrieved succesfully',
      data: result,
    });
  });
const updateSingleProject = catchAsync(async (req, res) => {
 const {id} = req.params
    const result = await ProjectServices.updateProjectInDb(id,req.body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project is updated succesfully',
      data: result,
    });
  });

  export const ProjectControllers= {createProject,updateSingleProject,getProjects,getSingleProject}