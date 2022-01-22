import express from "express";

import { getPosts, getPostsByCategory } from "../controllers/postsController";

const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", getPosts);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/:category", getPostsByCategory);

export { router as postsRouter };
