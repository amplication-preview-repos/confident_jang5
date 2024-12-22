import { ProcessedBlog as TProcessedBlog } from "../api/processedBlog/ProcessedBlog";

export const PROCESSEDBLOG_TITLE_FIELD = "id";

export const ProcessedBlogTitle = (record: TProcessedBlog): string => {
  return record.id?.toString() || String(record.id);
};
