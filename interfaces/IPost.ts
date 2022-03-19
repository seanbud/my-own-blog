/**
 * Represents a single Post.
 */
export interface IPost {
  /**
   * The associated Post categories.
   */
  readonly categories: ReadonlyArray<string>;

  /**
   * The date the Post was published.
   */
  readonly date: string;

  /**
   * The Post content.
   */
  readonly post: string;
}
