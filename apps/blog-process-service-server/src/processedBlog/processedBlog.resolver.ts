import * as graphql from "@nestjs/graphql";
import { ProcessedBlogResolverBase } from "./base/processedBlog.resolver.base";
import { ProcessedBlog } from "./base/ProcessedBlog";
import { ProcessedBlogService } from "./processedBlog.service";

@graphql.Resolver(() => ProcessedBlog)
export class ProcessedBlogResolver extends ProcessedBlogResolverBase {
  constructor(protected readonly service: ProcessedBlogService) {
    super(service);
  }
}
