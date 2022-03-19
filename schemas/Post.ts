import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  categories: {
    required: true,
    type: Array,
  },
  date: {
    required: true,
    type: String,
  },
  post: {
    required: true,
    type: String,
  },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
