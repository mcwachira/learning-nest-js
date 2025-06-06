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
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postTypes } from '../enums/postTypes.enums';
import { postStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'This is the title for tje blog post ',
    example: 'This is a title',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: postTypes,
    description: "Possible values , 'post', 'page','story','series'",
  })
  @IsEnum(postTypes)
  @IsNotEmpty()
  postType: postTypes;
  @ApiProperty({
    example: 'my-url',
    description: "For example 'my-url'",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      "A slug should be all small letters and uses only '-' and without spaces.For example 'my-url'",
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: "Possible values , 'draft', 'scheduled','review','published'",
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    example: 'the post content',
    description: 'this is the content of the post',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    example:
      '{\r\n    "@context": "https://schema.org",\r\n    "@type": "Person"\r\n  }',
    description:
      'Serialize your JSON object as a validation error will be thrown',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    example: 'http://localhost.com/images/image1.jpg',
    description: 'Featured image for your blog',
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    example: '2024-03-16T07:46:32+0000',
    description: 'this is the date  when the blog is published',
  })
  @IsISO8601()
  @IsOptional()
  publishOn: Date;

  @ApiPropertyOptional({
    example: ['nestjs', 'typescript'],
    description: 'its an array of tags passed as string values',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The Key can be any string identifier for your meta option',
          example: 'sideBarEnabled',
        },
        value: {
          type: 'any',
          description: 'Any Value you want to save to key',
          example: true,
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
