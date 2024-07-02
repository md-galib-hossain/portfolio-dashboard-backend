import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogPostServices } from "./blog.service";

const createBlogPost = catchAsync(async (req, res) => {
  const result = await BlogPostServices.createBlogPost(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog post created successfully',
    data: result,
  });
});

const getBlogPosts = catchAsync(async (req, res) => {
  const result = await BlogPostServices.getBlogPosts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog posts retrieved successfully',
    data: result,
  });
});

const getSingleBlogPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogPostServices.getSingleBlogPost(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog post retrieved successfully',
    data: result,
  });
});
const updateSingleBlogPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogPostServices.updateBlogPostInDb(id,req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog post updated successfully',
    data: result,
  });
});

export const BlogPostControllers = {
  createBlogPost,
  getBlogPosts,
  getSingleBlogPost,updateSingleBlogPost
};
