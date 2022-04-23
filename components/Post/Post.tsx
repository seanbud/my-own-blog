import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";

import styles from "./Post.module.css";

import { IPost } from "../../interfaces/IPost";

const Post: FunctionComponent<IPost> = ({ date, post }) => {
  return (
    <article className={styles.post}>
      <time className={styles.post__date}>{date}</time>
      <ReactMarkdown>{post}</ReactMarkdown>
    </article>
  );
};

export default Post;
