import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  Ip,
  Patch,
  Injectable,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { GetUsersParamDto } from '../dtos/get-users-param-dto';
import { PatchUserDto } from '../dtos/patch-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAllUsers() {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      { id: 1, firstName: 'John', email: 'john@doe.com' },
      { id: 2, firstName: 'Alice', email: 'alice@doe.com' },
    ];
  }

  public findOneById(id: string) {
    return { id: 2, firstName: 'Alice', email: 'alice@doe.com' };
  }

  public createUsers(createUserDto: CreateUserDto, headers: any, ip: any) {
    console.log(createUserDto instanceof CreateUserDto);

    return 'You sent a post  request to the users endpoint';
  }

  public patchUsers(patchUserDto: PatchUserDto) {
    console.log(patchUserDto);

    return patchUserDto;
  }
}
