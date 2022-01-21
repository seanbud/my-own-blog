const { parse } = require("marked");

const Posts = require("../models/Post");

/**
 * Retrieves all Posts from the Posts database.
 * @param {*} _
 * @param {Express.Response} res
 */
const getPosts = async function (_, res) {
  const postsQuery = await Posts.find();
  const posts = postsQuery.map(({ categories, date, post }) => ({
    categories,
    date,
    post: parse(post),
  }));

  res.render("index", {
    posts,
  });
};

module.exports = {
  getPosts,
};
