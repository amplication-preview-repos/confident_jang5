import { Module } from "@nestjs/common";
import { ProcessedBlogModuleBase } from "./base/processedBlog.module.base";
import { ProcessedBlogService } from "./processedBlog.service";
import { ProcessedBlogController } from "./processedBlog.controller";
import { ProcessedBlogResolver } from "./processedBlog.resolver";

@Module({
  imports: [ProcessedBlogModuleBase],
  controllers: [ProcessedBlogController],
  providers: [ProcessedBlogService, ProcessedBlogResolver],
  exports: [ProcessedBlogService],
})
export class ProcessedBlogModule {}
