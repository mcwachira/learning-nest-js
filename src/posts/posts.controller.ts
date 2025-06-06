import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/:user')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return this.postService.createPost(createPostDto);
  }
}
