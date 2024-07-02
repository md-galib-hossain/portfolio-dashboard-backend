import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
 
    const result = await UserServices.createUser(req.body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created succesfully',
      data: result,
    });
  });
const getUser = catchAsync(async (req, res) => {
 
    const result = await UserServices.getUserFromDb()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is retrieved succesfully',
      data: result,
    });
  });
const updateUser = catchAsync(async (req, res) => {
  console.log(req.body)
 const {id} = req.params
    const result = await UserServices.updateUserInDb(id,req.body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is updated succesfully',
      data: result,
    });
  });

  export const  UserControllers = {
    createUser,getUser,updateUser
  }