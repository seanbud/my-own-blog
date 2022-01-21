const { readdirSync, readFileSync } = require("fs");
const path = require("path");

const express = require("express");
const marked = require("marked");

const { getTodaysDate } = require("./utilities/date");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (_, res) => {
  const posts = readdirSync(path.resolve(__dirname, "posts")).map((post) => ({
    date: getTodaysDate(),
    post: marked.parse(
      readFileSync(path.resolve(__dirname, "posts", post), {
        encoding: "utf-8",
      })
    ),
  }));

  res.render("index", {
    posts,
  });
});

app.listen(8080, () => console.log("Listening on *:8080..."));
