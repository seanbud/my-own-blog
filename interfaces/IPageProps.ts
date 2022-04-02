import { IPost } from "./IPost";

/**
 * Props for functional components.
 */
export interface IPageProps {
  categories: string[];
  posts: IPost[];
}
