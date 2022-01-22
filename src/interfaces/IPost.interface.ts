/**
 * An interface representing the Mongo DB Post document.
 */
export interface IPost {
  categories: ReadonlyArray<string>;
  date: string;
  post: string;
}
