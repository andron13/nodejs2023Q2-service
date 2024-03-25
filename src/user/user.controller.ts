import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { dateTransformByUser, omitPassword } from '../share/entityMethods';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<Omit<User, 'password'>[]> {
    const users = await this.userService.findAll();
    return users.map((user) => omitPassword(user));
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userService.findOne(id);
    return omitPassword(user);
  }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const newUser = await this.userService.create(createUserDto);
    const userOmitPassword = omitPassword(newUser);
    return dateTransformByUser(userOmitPassword);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdatePasswordDto,
  ): Promise<Omit<User, 'password'>> {
    const updatedUser = await this.userService.update(id, updateUserDto);
    const userOmitPassword = omitPassword(updatedUser);
    return dateTransformByUser(userOmitPassword);
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Omit<User, 'password'>> {
    const deletedUser = await this.userService.remove(id);
    return omitPassword(deletedUser);
  }
}
