import dotenv from "dotenv";

dotenv.config();

import path = require("path");

import express = require("express");
import mongoose = require("mongoose");

import { notFoundRouter } from "./routes/404Router";
import { postsRouter } from "./routes/postsRouter";

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(path.resolve(__dirname, "public")));

app.use(notFoundRouter);
app.use(postsRouter);

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION as string);
  app.listen(PORT, () => console.log("Listening on *:8080..."));
}

main().catch(console.error);
