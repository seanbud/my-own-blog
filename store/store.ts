import { createContext, useContext } from "react";
import { IPost } from "../interfaces/IPost";

const Context = createContext<{
  audio?: HTMLAudioElement | null;
  categories: string[];
  posts: IPost[];
}>({
  audio: null,
  categories: [],
  posts: [],
});

export default Context;
