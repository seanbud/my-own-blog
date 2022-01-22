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
  const postsQuery: ReadonlyArray<IPost> = await Posts.find();
  const posts = postsQuery.map(({ categories, date, post }) => ({
    categories: categories,
    date: date,
    post: marked.parse(post),
  }));

  res.render("index", {
    posts,
  });
};

/**
 * Retrieves all Posts from the Posts database filtered by category.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const getPostsByCategory = async function (req: Request, res: Response) {
  const postsQuery: ReadonlyArray<IPost> = await Posts.find({
    categories: req.params.category,
  });
  const posts = postsQuery.map(({ categories, date, post }) => ({
    categories: categories,
    date: date,
    post: marked.parse(post),
  }));

  res.render("index", {
    posts,
  });
};

export { getPosts, getPostsByCategory };
