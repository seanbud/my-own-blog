import { IGifImage } from "./IGifImage.interface";

/**
 * URLs and sizes for the many different renditions offered for each GIF.
 * @see {@link https://developers.giphy.com/docs/api/schema#image-object}
 */
export interface IGifImages {
  /**
   * Data on versions of this GIF with a fixed height of 200 pixels. Good for mobile use.
   */
  readonly fixed_height: IGifImage;
}
