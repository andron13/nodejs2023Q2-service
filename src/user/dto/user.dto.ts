import { Exclude, Expose } from 'class-transformer';

import { User } from '../entities/user.entity';

@Exclude()
export class UserDto {
  @Expose()
  readonly id: string;
  login: string;
  version: number;
  readonly createdAt: number;
  updatedAt: number;

  constructor(user: User) {
    this.id = user.id;
    this.login = user.login;
    this.version = user.version;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
