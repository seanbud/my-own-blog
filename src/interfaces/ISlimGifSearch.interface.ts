import { ISlimGif } from "./ISlimGif.interface";

/**
 * A slimmed down version of the Giphy search response.
 * @see {@link https://developers.giphy.com/docs/api/endpoint/#search}
 */
export interface ISlimGifSearch {
  /**
   * GIF Objects are returned from most of GIPHY API's Endpoints.
   * These objects contain a variety of information, such as the Image Object,
   * which itself includes the URLS for multiple different GIFS formats and sizes.
   */
  data: ReadonlyArray<ISlimGif>;
}
