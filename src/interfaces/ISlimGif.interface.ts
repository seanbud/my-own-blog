import { IGifImages } from "./IGifImages.interface";

/**
 * A slimmed down version of the Giphy GIF Object.
 * @see {@link https://developers.giphy.com/docs/api/schema/#gif-object}
 */
export interface ISlimGif {
  readonly images: IGifImages;
}
