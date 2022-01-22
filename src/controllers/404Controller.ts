import { Request, Response } from "express";

import { getGif } from "../clients/GiphyClient";

/**
 * Renders the 404 view.
 * @param {Express.Request} _
 * @param {Express.Response} res
 */
const render404View = async function (_: Request, res: Response) {
  const gifUrl = await getGif();

  res.render("404", {
    gif: gifUrl,
  });
};

export { render404View };
