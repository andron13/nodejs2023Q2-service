import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { PrismaService } from '../prisma/prisma.service';
import { dateTransformByUser, incrementTime } from '../share/entityMethods';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}

  async findAll() {
    return this.db.user.findMany();
  }

  async create(createUserDto: CreateUserDto) {
    return this.db.user.create({
      data: createUserDto,
    });
  }

  async findOne(id: string) {
    const user = await this.db.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    console.log({ user });
    return user;
  }

  async update(id: string, updateUserDto: UpdatePasswordDto) {
    const userToUpdate = await this.db.user.findUnique({ where: { id } });
    console.log({ userToUpdate });
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }

    if (userToUpdate.password !== updateUserDto.oldPassword) {
      throw new ForbiddenException('Old password is incorrect');
    }

    const newDate = incrementTime(userToUpdate.updatedAt);

    const updatedUser = {
      ...userToUpdate,
      password: updateUserDto.newPassword,
      version: { increment: 1 },
      updatedAt: newDate,
    };
    const resultUser = await this.db.user.update({
      where: { id },
      data: updatedUser,
    });
    console.log({ resultUser });
    return resultUser;
  }

  async remove(id: string) {
    const userToRemove = await this.db.user.findUnique({ where: { id } });

    if (!userToRemove) {
      throw new NotFoundException('User not found');
    }

    return this.db.user.delete({ where: { id } });
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
