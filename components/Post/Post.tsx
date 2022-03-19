import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./Post.module.css";

import { IPost } from "../../interfaces/IPost";

const Post: FunctionComponent<IPost> = ({ categories, date, post }) => {
  return (
    <article className={styles.post}>
      {categories.map((category, index) => (
        <span className={styles.post__category} key={index}>
          <Link href={`/category/${category}`}>{category}</Link>
        </span>
      ))}
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: post }}></div>
    </article>
  );
};

export default Post;
