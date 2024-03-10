import { PartialType } from '@nestjs/mapped-types';

import { IsNotEmpty, IsString, MinLength } from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class UpdatePasswordDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  newPassword: string;
}
