import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { User } from './entities/user.entity';
import { Database } from '../database/database';

@Injectable()
export class UserService {
  constructor(private db: Database) {}

  findAll(): User[] {
    return this.db.users;
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { login, password } = createUserDto;
    if (this.existUser(login)) {
      throw new HttpException('Login already exists', HttpStatus.BAD_REQUEST);
    }
    const newUser = new User(login, password);
    this.db.users.push(newUser);
    return Promise.resolve(newUser);
  }

  findOne(id: string): User {
    const user = this.db.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  update(id: string, updateUserDto: UpdatePasswordDto): User {
    const userIndex = this.db.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    const user = this.db.users[userIndex];

    if (updateUserDto.oldPassword && updateUserDto.newPassword) {
      if (user.password !== updateUserDto.oldPassword) {
        throw new ForbiddenException('Old password is incorrect');
      }
      user.changePassword(updateUserDto.newPassword);
    }

    return user;
  }

  remove(id: string) {
    const userIndex = this.db.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    const [deletedUser] = this.db.users.splice(userIndex, 1);
    return deletedUser;
  }

  /*
   * Help methods
   */

  existUser(login: string) {
    return this.db.users.find((user) => user.login === login);
  }
}
