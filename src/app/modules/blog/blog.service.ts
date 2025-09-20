import { TBlogPost } from "./blog.interface";
import { BlogPost } from "./blog.model";

export const createBlogPost = async (blogPostData: TBlogPost) => {
  const result = await BlogPost.create(blogPostData);
  return result;
};

export const getBlogPosts = async () => {
  const result = await BlogPost.find();
  return result;
};

export const getSingleBlogPost = async (id: string) => {
  const result = await BlogPost.findById(id);
  return result;
};

/*

const updateBlogPostInDb = async (id: string, blogData: Partial<TBlogPost>): Promise<TBlogPost | null> => {
  const { tags, images, ...remainingData } = blogData;

  // Combine all updates into a single operation
  const updateOps: any = { ...remainingData }; // Using any for flexibility

  if (tags && tags.length > 0) {
    // Add new tags to the existing array only if they are not already present
    updateOps.$addToSet = updateOps.$addToSet || {};
    updateOps.$addToSet.tags = { $each: tags };
  }

  if (images && images.length > 0) {
    // Append new images to the existing ones
    updateOps.$addToSet = updateOps.$addToSet || {};
    updateOps.$addToSet.images = { $each: images };
  }

  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    updateOps,
    { new: true, runValidators: true }
  );

  return updatedBlogPost;
};
*/

const updateBlogPostInDb = async (id: string, blogData: Partial<TBlogPost>): Promise<TBlogPost | null> => {
  const { title, publishDate, coverImage, images, excerpt, content, tags, category, estimatedReadingTime, ...remainingData } = blogData;

  const updateOps: any = { ...remainingData }; 

  if (title !== undefined) {
    updateOps.title = title;
  }

  if (publishDate !== undefined) {
    updateOps.publishDate = publishDate;
  }

  if (coverImage !== undefined) {
    updateOps.coverImage = coverImage;
  }

  if (images !== undefined) {
    updateOps.images = images;
  }

  if (excerpt !== undefined) {
    updateOps.excerpt = excerpt;
  }

  if (content !== undefined) {
    updateOps.content = content;
  }

  if (tags !== undefined) {
    updateOps.tags = tags;
  }

  if (category !== undefined) {
    updateOps.category = category;
  }

  if (estimatedReadingTime !== undefined) {
    updateOps.estimatedReadingTime = estimatedReadingTime;
  }

  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    { $set: updateOps },
    { new: true, runValidators: true }
  );

  return updatedBlogPost;
};

export const BlogPostServices = {
  createBlogPost,
  getBlogPosts,
  getSingleBlogPost,updateBlogPostInDb
};
