import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Database } from '../database/database';

@Injectable()
export class UserService {
  constructor(private db: Database) {}

  findAll() {
    return this.db.users;
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const { login, password } = createUserDto;
    const newUser = new User(login, password);
    this.db.users.push(newUser);
    return Promise.resolve(newUser);
  }

  findOne(id: string) {
    return this.db.users.find((user) => user.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.db.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    const updatedUser = { ...this.db.users[userIndex], ...updateUserDto };
    this.db.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: string) {
    const userIndex = this.db.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    return this.db.users.splice(userIndex, 1);
  }
}
