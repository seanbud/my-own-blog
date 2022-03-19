import "@fortawesome/fontawesome-free/css/all.min.css";
import { marked } from "marked";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

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
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => setAudio(new Audio("/audio/ok.wav")), []);

  return (
    <Context.Provider value={{ audio, categories, posts }}>
      <Layout />
    </Context.Provider>
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
      posts: posts.map(({ categories, date, post }) => ({
        categories: categories,
        date: date,
        post: marked.parse(post),
      })),
    },
  };
};

export default Home;
