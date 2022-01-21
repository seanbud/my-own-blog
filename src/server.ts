require("dotenv").config();

import path = require("path");

import express = require("express");
import mongoose = require("mongoose");

import { indexRouter } from "./routes/index";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public")));

app.use(indexRouter);

async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION as string);

    app.listen(8080, () => console.log("Listening on *:8080..."));
  } catch (err) {
    console.error(err);
  }
}

main();
