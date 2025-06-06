import { Controller, Get, Post, Param, Query, Body, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(query);
    console.log(params);
    return `You sent a request to the users endpoint ${params.id}`;
  }

  @Post()
  public createtUsers(@Req() request: Request) {
    console.log(request.body);
    return 'You sent a post  request to the users endpoint';
  }
}
