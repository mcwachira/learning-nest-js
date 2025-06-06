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
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param-dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers() {
    return this.usersService.findAllUsers();
  }
  @Get('/:id?')
  public getUser(@Param() getUsersParamDto: GetUsersParamDto) {
    // const { id } = getUsersParamDto.id;
    // return this.usersService.findOne(id);
  }

  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    return this.usersService.createUsers(createUserDto, headers, ip);
  }

  @Patch()
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    return this.usersService.patchUsers(patchUserDto);
  }
}
