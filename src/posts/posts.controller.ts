import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/:user?')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }
}
