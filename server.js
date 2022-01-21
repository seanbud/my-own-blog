require("dotenv").config();

const path = require("path");

const express = require("express");
const mongoose = require("mongoose");

const indexRoute = require("./routes/index");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public")));

app.use(indexRoute);

async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);

    app.listen(8080, () => console.log("Listening on *:8080..."));
  } catch (err) {
    console.error(err);
  }
}

main();
