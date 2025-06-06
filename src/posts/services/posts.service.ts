import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UsersService) {}
  public findAll(userId: string) {
    const user = this.userService.findOneById(userId);
    console.log(userId);

    //find user from User service
    return [
      {
        users: user,
        id: 1,
        title: 'Hello this is my first post',
        content: 'test content 1',
      },
      {
        users: user,
        id: 2,
        title: 'Hello this is my second post',
        content: 'test content 2',
      },

      {
        users: user,
        id: 3,
        title: 'Hello this is my third post',
        content: 'test content 3',
      },
    ];
  }
}
