import { FunctionComponent, useContext } from "react";

import styles from "./Posts.module.css";

import Context from "../../store/store";
import Post from "../Post/Post";

const Posts: FunctionComponent = () => {
  const context = useContext(Context);

  return (
    <div className={styles.posts}>
      {context.posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Posts;