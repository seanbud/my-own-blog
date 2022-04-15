import createDOMPurify from "dompurify";
import { FunctionComponent, useEffect, useState } from "react";

import styles from "./Post.module.css";

import { IPost } from "../../interfaces/IPost";

const Post: FunctionComponent<IPost> = ({ date, post }) => {
  const [cleanPost, setCleanPost] = useState("");

  useEffect(() => {
    const DOMPurify = createDOMPurify(window);
    setCleanPost(
      DOMPurify.sanitize(post, {
        USE_PROFILES: { html: true },
      })
    );
  }, [post]);

  return (
    <article className={styles.post}>
      <time className={styles.post__date}>{date}</time>
      <div dangerouslySetInnerHTML={{ __html: cleanPost }}></div>
    </article>
  );
};

export default Post;
