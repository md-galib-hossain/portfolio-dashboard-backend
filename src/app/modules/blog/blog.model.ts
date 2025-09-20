import { model } from "mongoose";
import { TBlogPost } from "./blog.interface";
import { Schema } from "mongoose";

const blogPostSchema = new Schema<TBlogPost>({
  title: { type: String, required: true },
  publishDate: { type: String, required: true },
  coverImage: { type: String, required: true },
  images: { type: [String], },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], required: true },
  category: { type: String, required: true },
  estimatedReadingTime: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false }  // Add isDeleted field
}, { timestamps: true });

export const BlogPost = model<TBlogPost>('BlogPost', blogPostSchema);

