/**
 * URLs and sizes for the many different renditions offered for each GIF.
 * @see {@link https://developers.giphy.com/docs/api/schema#image-object}
 */
export interface IGifImage {
  /**
   * The publicly-accessible direct URL for this GIF for this size of the GIF.
   */
  readonly url: string;
}
