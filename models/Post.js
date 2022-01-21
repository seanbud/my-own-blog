const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostModelSchema = new Schema({
  date: String,
  post: String,
});

module.exports = mongoose.model("Post", PostModelSchema);
