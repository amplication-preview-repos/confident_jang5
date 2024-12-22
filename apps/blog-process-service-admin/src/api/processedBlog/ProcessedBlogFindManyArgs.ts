import { ProcessedBlogWhereInput } from "./ProcessedBlogWhereInput";
import { ProcessedBlogOrderByInput } from "./ProcessedBlogOrderByInput";

export type ProcessedBlogFindManyArgs = {
  where?: ProcessedBlogWhereInput;
  orderBy?: Array<ProcessedBlogOrderByInput>;
  skip?: number;
  take?: number;
};
