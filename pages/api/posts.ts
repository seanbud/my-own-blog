import { marked } from "marked";
import type { NextApiRequest, NextApiResponse } from "next";

import { IPost } from "../../interfaces/IPost";
import dbConnect from "../../lib/db-connect";
import Post from "../../schemas/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const posts: ReadonlyArray<IPost> = await Post.find({}).sort({
          _id: -1,
        });

        const markedPosts = posts.map(({ categories, date, post }) => ({
          categories: categories,
          date: date,
          post: marked.parse(post),
        }));

        res.status(200).json({ success: true, data: markedPosts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
