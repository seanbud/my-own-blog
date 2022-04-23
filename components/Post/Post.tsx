import { FunctionComponent } from "react";

import styles from "./Post.module.css";

import { IPost } from "../../interfaces/IPost";
import ReactMarkdown from "react-markdown";

const Post: FunctionComponent<IPost> = ({ date, post }) => {
  return (
    <article className={styles.post}>
      <time className={styles.post__date}>{date}</time>
      <ReactMarkdown children={post}></ReactMarkdown>
    </article>
  );
};

export default Post;
