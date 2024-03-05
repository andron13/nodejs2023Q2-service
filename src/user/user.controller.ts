import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

const statusMessages = {
  201: 'The user has been successfully created.',
  204: 'User was successfully deleted.',
  400: 'Invalid Request: User ID should be a valid UUID.',
  403: 'Forbidden: The provided old password is incorrect.',
  404: 'User not found: No record with the provided user ID exists in the database.',
};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // get all users
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Users successfully retrieved.' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', description: 'ID of the user to retrieve.' })
  @ApiResponse({ status: 200, description: 'User successfully retrieved.' })
  @ApiResponse({ status: 400, description: statusMessages['400'] })
  @ApiResponse({ status: 404, description: statusMessages['404'] })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a user' }) // Operation description
  @ApiBody({ type: CreateUserDto }) // Body description
  @ApiResponse({
    status: 201,
    description: statusMessages['201'],
  }) // Response description
  @ApiResponse({ status: 400, description: statusMessages['400'] })
  @Post() // create user (following DTO should be used) CreateUserDto
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Update user password' }) // Description of the operation
  @ApiParam({ name: 'id', description: 'User id' }) // Description of the parameter
  @ApiBody({ type: UpdateUserDto }) // Description of the body
  @ApiResponse({
    status: 200,
    description: 'User password has been successfully updated.',
  }) // Description of the response
  @ApiResponse({
    status: 400,
    description: statusMessages['400'],
  })
  @ApiResponse({ status: 404, description: statusMessages['404'] })
  @ApiResponse({ status: 403, description: statusMessages['403'] })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({ status: 204, description: statusMessages['204'] })
  @ApiResponse({
    status: 400,
    description: statusMessages['404'],
  })
  @ApiResponse({ status: 404, description: statusMessages['404'] })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
