import mongoose from "mongoose";

import { IPost } from "../interfaces/IPost.interface";

const Schema = mongoose.Schema;

const PostModelSchema = new Schema<IPost>({
  categories: { type: [String], required: true },
  date: { type: String, required: true },
  post: { type: String, required: true },
});

const Posts = mongoose.model<IPost>("Post", PostModelSchema);

export { Posts };
