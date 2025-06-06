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
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { GetUsersParamDto } from '../dtos/get-users-param-dto';
import { PatchUserDto } from '../dtos/patch-user.dto';

@Injectable()
export class UsersService {
  public findAllUsers() {
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
