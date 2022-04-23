import type { GetServerSideProps, NextPage } from "next";

import Layout from "../../components/Layout/Layout";
import { IPageProps } from "../../interfaces/IPageProps";
import { IPost } from "../../interfaces/IPost";
import dbConnect from "../../lib/db-connect";
import Post from "../../schemas/Post";
import BlogContext from "../../store/store";

const Category: NextPage<IPageProps> = ({ categories, posts }) => {
  return (
    <BlogContext.Provider value={{ categories, posts }}>
      <Layout />
    </BlogContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  await dbConnect();

  const { category } = context.query;

  const categories: string[] = await Post.find().distinct("categories");

  const posts: ReadonlyArray<IPost> = await Post.find({
    categories: category,
  }).sort({
    _id: -1,
  });

  return {
    props: {
      categories,
      posts: posts.map(({ categories, date, post }) => ({
        categories: categories,
        date: date,
        post: post,
      })),
    },
  };
};

export default Category;
