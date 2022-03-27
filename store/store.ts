import { createContext } from "react";
import { IPost } from "../interfaces/IPost";

const Context = createContext<{
  categories: string[];
  posts: IPost[];
}>({
  categories: [],
  posts: [],
});

export default Context;
