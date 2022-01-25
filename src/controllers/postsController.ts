import { Request, Response } from "express";
import { marked } from "marked";

import { IPost } from "../interfaces/IPost.interface";
import { Posts } from "../models/Post";

/**
 * Retrieves all Posts from the Posts database.
 * @param {Express.Request} _
 * @param {Express.Response} res
 */
const getPosts = async function (_: Request, res: Response) {
  res.render("index", {
    posts: await generatePosts(),
  });
};

/**
 * Retrieves all Posts from the Posts database filtered by category.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const getPostsByCategory = async function (req: Request, res: Response) {
  res.render("index", {
    posts: await generatePosts({ categories: req.params.category }),
  });
};

/**
 * Retrieves all Posts from the Posts database filtered by search term(s).
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const getPostsBySearch = async function (req: Request, res: Response) {
  res.render("index", {
    // TODO: No way this can be efficient at scale.
    // Most likely will need to separate titles out from content.
    // In other words, `content` and `post` should be their own fields in a document.
    posts: await generatePosts({
      post: { $regex: req.params.search, $options: "i" },
    }),
  });
};

/**
 * Generates Posts given a set of options.
 * @param options - Optional set of filters.
 * @returns A ReadonlyArray of IPost's.
 */
const generatePosts = async (options = {}): Promise<ReadonlyArray<IPost>> => {
  const postsQuery: ReadonlyArray<IPost> = await Posts.find({
    ...options,
  }).sort({ _id: -1 });

  return postsQuery.map(({ categories, date, post }) => ({
    categories: categories,
    date: date,
    post: marked.parse(post),
  }));
};

export { getPosts, getPostsByCategory, getPostsBySearch };
