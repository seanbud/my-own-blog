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
  const posts = await generatePosts({ categories: req.params.category });

  /**
   * No posts means a category was most likely entered as a URL search
   * param and was not found. Redirect to the 404 page and show them that
   * sweet, sweet GIF.
   */
  if (!posts.length) {
    res.redirect("404");
    return;
  }

  res.render("index", {
    posts: await generatePosts({ categories: req.params.category }),
  });
};

/**
 * Generates Posts given a set of options.
 * @param options - Optional set of filters.
 * @returns A ReadonlyArray of IPost's.
 */
const generatePosts = async (options = {}): Promise<ReadonlyArray<IPost>> => {
  const postsQuery: ReadonlyArray<IPost> = await Posts.find({ ...options });

  return postsQuery.map(({ categories, date, post }) => ({
    categories: categories,
    date: date,
    post: marked.parse(post),
  }));
};

export { getPosts, getPostsByCategory };
