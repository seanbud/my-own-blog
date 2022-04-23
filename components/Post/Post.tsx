import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "./Post.module.css";

import { IPost } from "../../interfaces/IPost";

const Post: FunctionComponent<IPost> = ({ date, post }) => {
  return (
    <article className={styles.post}>
      <time className={styles.post__date}>{date}</time>
      <ReactMarkdown
        children={post}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match.at(1)}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </article>
  );
};

export default Post;
