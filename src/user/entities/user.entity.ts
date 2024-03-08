import { Exclude } from 'class-transformer';
import { MinLength } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

import { getDateStamp } from '../../share/time';

export class User {
  readonly id: string; // crypto.randomUUID();
  @MinLength(3)
  login: string;

  @MinLength(3)
  @Exclude()
  password: string;
  version: number; // integer number, increments on update
  readonly createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update

  constructor(login: string, password: string) {
    this.id = uuidv4();
    this.login = login;
    this.password = password;
    this.version = 1;
    this.createdAt = getDateStamp();
    this.updatedAt = this.createdAt;
    console.log(this);
  }

  changePassword(newPassword: string) {
    this.password = newPassword;
    this.version++;
    this.updatedAt = getDateStamp();
  }
}
