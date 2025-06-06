import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    //Check if user exist in database
    const User = this.usersService.findOneById('1');

    //login

    //return token

    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
