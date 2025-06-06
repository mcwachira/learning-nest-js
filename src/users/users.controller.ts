import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(limit);
    console.log(id);
    return `You sent a request to the users endpoint ${id}`;
  }

  @Post()
  public createtUsers(@Body() body: any, @Headers() headers: any) {
    console.log(body);
    console.log(headers);
    return 'You sent a post  request to the users endpoint';
  }
}
