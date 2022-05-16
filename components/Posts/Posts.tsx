import { FunctionComponent, useContext, useEffect } from "react";

import styles from "./Posts.module.css";

import useIntersection from "../../hooks/useIntersection";
import { IPost } from "../../interfaces/IPost";
import BlogContext from "../../store/store";
import Post from "../Post/Post";

type JSONResponse = {
  data?: IPost[];
};

const Posts: FunctionComponent = () => {
  const context = useContext(BlogContext);

  const [containerRef] = useIntersection(context);

  useEffect(() => {
    fetch(`/api/posts/${context.page}`)
      .then((response) => response.json() as JSONResponse)
      .then(({ data }) => data && context.setPosts(data));
  }, [context.page]);

  return (
    <>
      <div className={styles.posts}>
        {context.posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <hr className={styles.horizontal} ref={containerRef} />
    </>
  );
};

export default Posts;
