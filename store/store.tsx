import { createContext, FunctionComponent, useState } from "react";
import { IPost } from "../interfaces/IPost";

export type BlogContextType = {
  categories: string[];
  page: number;
  posts: IPost[];
  setCategories: (_: string[]) => void;
  setPage: () => void;
  setPosts: (_: IPost[]) => void;
};

const BlogContext = createContext<BlogContextType>({
  categories: [],
  page: 1,
  posts: [],
  setCategories: (_: string[]) => {},
  setPage: () => {},
  setPosts: (_: IPost[]) => {},
});

export const BlogContextProvider: FunctionComponent = (props) => {
  const [categories, setCategories] = useState<string[]>([]);

  const [page, setPage] = useState(1);

  const [posts, setPosts] = useState<IPost[]>([]);

  const categoriesHandler = (newCategories: string[]) =>
    setCategories((previousCategories) => [
      ...previousCategories,
      ...newCategories,
    ]);

  const pageHandler = () => setPage((previousPage) => previousPage + 1);

  const postsHandler = (newPosts: IPost[]) =>
    setPosts((previousPosts) => [...previousPosts, ...newPosts]);

  return (
    <BlogContext.Provider
      value={{
        categories,
        page,
        posts,
        setCategories: categoriesHandler,
        setPage: pageHandler,
        setPosts: postsHandler,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
