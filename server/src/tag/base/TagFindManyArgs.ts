/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TagWhereInput } from "./TagWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TagOrderByInput } from "./TagOrderByInput";

@ArgsType()
class TagFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TagWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TagWhereInput, { nullable: true })
  @Type(() => TagWhereInput)
  where?: TagWhereInput;

  @ApiProperty({
    required: false,
    type: [TagOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TagOrderByInput], { nullable: true })
  @Type(() => TagOrderByInput)
  orderBy?: Array<TagOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TagFindManyArgs as TagFindManyArgs };