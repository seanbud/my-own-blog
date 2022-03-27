import createDOMPurify from "dompurify";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

import styles from "./Post.module.css";

import { IPost } from "../../interfaces/IPost";

const Post: FunctionComponent<IPost> = ({ categories, date, post }) => {
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
      {categories.map((category, index) => (
        <span className={styles.post__category} key={index}>
          <Link href={`/category/${category}`}>{category}</Link>
        </span>
      ))}
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: cleanPost }}></div>
    </article>
  );
};

export default Post;
