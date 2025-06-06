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
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page?: number,
  ) {
    console.log(typeof limit);
    console.log(limit);
    console.log(typeof id);
    console.log(id);
    console.log(typeof page);
    console.log(page);
    return `You sent a request to the users endpoint ${id}`;
  }

  @Post()
  public createtUsers(@Body() body: any, @Headers() headers: any) {
    console.log(body);
    console.log(headers);
    return 'You sent a post  request to the users endpoint';
  }
}
