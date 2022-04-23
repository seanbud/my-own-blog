import type { GetServerSideProps, NextPage } from "next";

import Layout from "../components/Layout/Layout";
import { IPageProps } from "../interfaces/IPageProps";
import { IPost } from "../interfaces/IPost";
import dbConnect from "../lib/db-connect";
import Post from "../schemas/Post";
import BlogContext from "../store/store";

const Home: NextPage<IPageProps> = ({ categories, posts }) => {
  return (
    <BlogContext.Provider value={{ categories, posts }}>
      <Layout />
    </BlogContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();

  const categories: string[] = await Post.find().distinct("categories");

  const posts: ReadonlyArray<IPost> = await Post.find({}).sort({
    _id: -1,
  });

  return {
    props: {
      categories,
      posts: posts.map((post) => ({
        categories: post.categories,
        date: post.date,
        post: post.post,
      })),
    },
  };
};

export default Home;
