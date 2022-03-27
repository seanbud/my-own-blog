import "@fortawesome/fontawesome-free/css/all.min.css";
import { marked } from "marked";
import type { GetServerSideProps, NextPage } from "next";

import Layout from "../../components/Layout/Layout";
import { IPost } from "../../interfaces/IPost";
import dbConnect from "../../lib/db-connect";
import Post from "../../schemas/Post";
import Context from "../../store/store";

interface Props {
  categories: string[];
  posts: IPost[];
}

const Category: NextPage<Props> = ({ categories, posts }) => {
  return (
    <Context.Provider value={{ categories, posts }}>
      <Layout />
    </Context.Provider>
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
        post: marked.parse(post),
      })),
    },
  };
};

export default Category;
