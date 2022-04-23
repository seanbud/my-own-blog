import { createContext } from "react";
import { IPost } from "../interfaces/IPost";

const BlogContext = createContext<{
  categories: string[];
  posts: IPost[];
}>({
  categories: [],
  posts: [],
});

export default BlogContext;
