import hljs from "highlight.js";
import { FunctionComponent, useContext, useEffect } from "react";

import styles from "./Posts.module.css";

import BlogContext from "../../store/store";
import Post from "../Post/Post";

const Posts: FunctionComponent = () => {
  const context = useContext(BlogContext);

  useEffect(() => {
    if (context.posts?.length > 0) hljs.highlightAll();
  }, [context.posts]);

  return (
    <div className={styles.posts}>
      {context.posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Posts;
