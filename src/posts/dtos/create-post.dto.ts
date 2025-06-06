import {
  IsArray,
  IsDate,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postTypes } from '../enums/postTypes.enums';
import { postStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  title: string;

  @IsEnum(postTypes)
  @IsNotEmpty()
  postType: postTypes;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      "A slug should be all small letters and uses only '-' and without spaces.For example 'my-url'",
  })
  slug: string;

  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @IsString()
  @IsOptional()
  content?: string;

  @IsJSON()
  @IsOptional()
  schema?: string;

  @IsString()
  @IsUrl()
  featuredImageUrl?: string;

  @IsISO8601()
  @IsNotEmpty()
  publishOn: Date;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto[];
}
