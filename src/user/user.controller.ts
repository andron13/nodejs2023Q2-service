import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { omitPassword } from '../share/omitPassword';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Omit<User, 'password'>[] {
    const users = this.userService.findAll();
    return users.map((user) => omitPassword(user));
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Omit<User, 'password'> {
    const user = this.userService.findOne(id);
    return omitPassword(user);
  }

  @Post() // create user (following DTO should be used) CreateUserDto
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdatePasswordDto,
  ): Omit<User, 'password'> {
    const updatedUser = this.userService.update(id, updateUserDto);
    return omitPassword(updatedUser);
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string): Omit<User, 'password'> {
    const deletedUser = this.userService.remove(id);
    return omitPassword(deletedUser);
  }
}
