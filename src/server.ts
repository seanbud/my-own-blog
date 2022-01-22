import dotenv from "dotenv";

dotenv.config();

import path = require("path");

import compression = require("compression");
import express = require("express");
import mongoose = require("mongoose");

import { __production__ } from "./constants";
import { notFoundRouter } from "./routes/404Router";
import { postsRouter } from "./routes/postsRouter";

const app = express();
const PORT = process.env.PORT || 8080;

app.enable("trust proxy");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

if (__production__) {
  app.use((req, res, next) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    req.secure ? next() : res.redirect(`https://${req.headers.host}${req.url}`);
  });
}

app.use(compression());

app.use(express.static(path.resolve(__dirname, "public")));

app.use(notFoundRouter);
app.use(postsRouter);

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION as string);
  app.listen(PORT, () => console.log("Listening on *:8080..."));
}

main().catch(console.error);
