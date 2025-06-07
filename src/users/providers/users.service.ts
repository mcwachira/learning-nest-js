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
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { PatchUserDto } from '../dtos/patch-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';

/** Class to connect to Users table and perform business operations */
@Injectable()
export class UsersService {
  /** Injecting the AuthService in order to see if user is authenticated */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    /** Injecting the usersRepository */
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /** Method to create user */
  public async createUser(createUserDto: CreateUserDto) {
    //check if user email exist
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    //handle exceptions

    //create a new user

    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }

  /** method to fetch all users from the database */
  public findAllUsers(limit: number, page: number) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      { id: 1, firstName: 'John', email: 'john@doe.com' },
      { id: 2, firstName: 'Alice', email: 'alice@doe.com' },
    ];
  }

  /** method to fetch one user from the database */
  public findOneById(id: string) {
    return { id: 2, firstName: 'Alice', email: 'alice@doe.com' };
  }

  /** method to create user and store in the database */
  public createUsers(createUserDto: CreateUserDto, headers: any, ip: any) {
    console.log(createUserDto instanceof CreateUserDto);

    return 'You sent a post  request to the users endpoint';
  }

  /** method to update user */
  public patchUsers(patchUserDto: PatchUserDto) {
    console.log(patchUserDto);

    return patchUserDto;
  }
}
