import express from "express";

import {
  getPosts,
  getPostsByCategory,
  getPostsBySearch,
} from "../controllers/postsController";

const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", getPosts);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/category/:category", getPostsByCategory);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/search/:search", getPostsBySearch);

export { router as postsRouter };
