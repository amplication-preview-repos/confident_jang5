import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedBlogServiceBase } from "./base/processedBlog.service.base";

@Injectable()
export class ProcessedBlogService extends ProcessedBlogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
