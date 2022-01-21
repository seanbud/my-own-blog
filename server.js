const path = require("path");

const express = require("express");
const marked = require("marked");
const mongoose = require("mongoose");

const Posts = require("./models/Post");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", async (_, res) => {
  const posts = (await Posts.find()).map(({ date, post }) => ({
    date,
    post: marked.parse(post),
  }));

  res.render("index", {
    posts,
  });
});

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://blogger:INDkgOz4THFIq0Z1@blog.zpet0.mongodb.net/blog?retryWrites=true&w=majority"
    );

    app.listen(8080, () => console.log("Listening on *:8080..."));
  } catch (err) {
    console.error(err);
  }
}

main();
