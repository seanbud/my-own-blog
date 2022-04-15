import { marked } from "marked";
import type { GetServerSideProps, NextPage } from "next";

import Layout from "../../components/Layout/Layout";
import { IPageProps } from "../../interfaces/IPageProps";
import { IPost } from "../../interfaces/IPost";
import dbConnect from "../../lib/db-connect";
import Post from "../../schemas/Post";
import { BlogContextProvider } from "../../store/store";

const Search: NextPage<IPageProps> = (props) => {
  return (
    <BlogContextProvider>
      <Layout {...props} />
    </BlogContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  await dbConnect();

  const { query } = context.query;

  const categories: string[] = await Post.find().distinct("categories");

  const posts: ReadonlyArray<IPost> = await Post.find({
    post: { $regex: query, $options: "i" },
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

export default Search;
