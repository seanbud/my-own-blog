import Head from "next/head";
import { FunctionComponent, useContext, useEffect, useRef } from "react";

import styles from "./Layout.module.css";

import { IPageProps } from "../../interfaces/IPageProps";
import { IPost } from "../../interfaces/IPost";
import BlogContext from "../../store/store";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

type JSONResponse = {
  data?: IPost[];
};

const Layout: FunctionComponent<IPageProps> = ({ categories, posts }) => {
  const context = useContext(BlogContext);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      context.setCategories(categories);
      context.setPosts(posts);
      return;
    }

    const fetchPosts = async () => {
      const response = await fetch(`/api/posts/${context.page}`);
      const { data } = (await response.json()) as JSONResponse;

      if (data) {
        context.setPosts(data);
      }
    };

    fetchPosts();
  }, [context.page]);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const document = event.target as Document;
      const scrollingElement = document.scrollingElement as HTMLHtmlElement;
      const { clientHeight, scrollHeight, scrollTop } = scrollingElement;
      const bottomSpaceLeftToScroll = scrollHeight - scrollTop - clientHeight;

      if (bottomSpaceLeftToScroll > 0) return;

      context.setPage();
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>blog - Rafael Negron</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <Posts />
      </main>
    </>
  );
};

export default Layout;
