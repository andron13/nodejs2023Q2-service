import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
// import { User } from './entities/user.entity';
// import { Database } from '../database/database';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}

  async findAll() {
    return this.db.user.findMany();
  }

  async create(createUserDto: CreateUserDto) {
    // const { login, password } = createUserDto;
    //
    // if (await this.existUser(login)) {
    //   throw new HttpException('Login already exists', HttpStatus.BAD_REQUEST);
    // }

    return this.db.user.create({
      data: createUserDto,
    });
  }

  async findOne(id: string) {
    const user = this.db.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdatePasswordDto) {
    const userToUpdate = await this.db.user.findUnique({ where: { id } });
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }

    if (userToUpdate.password !== updateUserDto.oldPassword) {
      throw new ForbiddenException('Old password is incorrect');
    }

    const updatedUser = {
      password: updateUserDto.newPassword,
      version: { increment: 1 },
      updatedAt: new Date(),
    };
    return this.db.user.update({ where: { id }, data: updatedUser });
  }

  async remove(id: string) {
    const deletedUser = await this.db.user.delete({ where: { id } });
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return deletedUser;
  }

  /*
   * Help methods
   */

  async existUser(login: string) {
    const user = await this.db.user.findFirst({
      where: { login: login },
    });
    return user !== null;
  }
}
