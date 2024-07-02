import { Date } from "mongoose";

export type TBlogPost = {
  id: number;
  title: string;
  publishDate: string;
  coverImage: string;
  images?: string[];
  technologies : string[];
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  estimatedReadingTime: number;
  isDeleted? : boolean;
};
