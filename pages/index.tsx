import "@fortawesome/fontawesome-free/css/all.min.css";
import { marked } from "marked";
import type { GetServerSideProps, NextPage } from "next";

import Layout from "../components/Layout/Layout";
import { IPost } from "../interfaces/IPost";
import dbConnect from "../lib/db-connect";
import Post from "../schemas/Post";
import Context from "../store/store";

interface Props {
  categories: string[];
  posts: IPost[];
}

const Home: NextPage<Props> = ({ categories, posts }) => {
  return (
    <Context.Provider value={{ categories, posts }}>
      <Layout />
    </Context.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();

  const categories: string[] = await Post.find().distinct("categories");

  const page = 1;
  const limit = 5;

  const posts: ReadonlyArray<IPost> = await Post.find({})
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({
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

export default Home;
