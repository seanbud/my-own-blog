import express from "express";

import { render404View } from "../controllers/404Controller";

const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("*", render404View);

export { router as notFoundRouter };
