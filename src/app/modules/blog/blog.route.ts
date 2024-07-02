import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogPostValidation } from "./blog.validation";
import { BlogPostControllers } from "./blog.controller";

const router = express.Router();

router.post(
  '/',
  validateRequest(BlogPostValidation.BlogPostCreateSchema),
  BlogPostControllers.createBlogPost
);

router.get('/', BlogPostControllers.getBlogPosts);

router.get('/:id', BlogPostControllers.getSingleBlogPost);
router.patch('/:id', BlogPostControllers.updateSingleBlogPost);

export const BlogPostRoutes = router;
