import fetch from "node-fetch";
import { ISlimGifSearch } from "../interfaces/ISlimGifSearch.interface";

/**
 * Retrieves a random GIF from the Giphy resource.
 * @returns A fixed height URL of the GIF.
 */
const getGif = async () => {
  const BASE_URL = new URL("https://api.giphy.com/v1/gifs/search");
  BASE_URL.searchParams.set("api_key", process.env.GIPHY_API_KEY as string);
  BASE_URL.searchParams.set("q", "clapping");

  const gifSearchRequest = await fetch(BASE_URL.toString());

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const parsedGifSearchRequest: ISlimGifSearch = await gifSearchRequest.json();

  // The magic 26 indicates the upper bound of the Giphy API limit.
  const random = Math.floor(Math.random() * 26);

  return parsedGifSearchRequest.data[random].images.fixed_height.url;
};

export { getGif };
