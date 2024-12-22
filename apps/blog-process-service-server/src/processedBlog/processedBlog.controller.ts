import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedBlogService } from "./processedBlog.service";
import { ProcessedBlogControllerBase } from "./base/processedBlog.controller.base";

@swagger.ApiTags("processedBlogs")
@common.Controller("processedBlogs")
export class ProcessedBlogController extends ProcessedBlogControllerBase {
  constructor(protected readonly service: ProcessedBlogService) {
    super(service);
  }
}
