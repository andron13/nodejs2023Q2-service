import { Exclude } from 'class-transformer';

import { getDateStamp } from '../../share/time';

export class User {
  readonly id: string; // crypto.randomUUID();
  login: string;

  @Exclude()
  password: string;
  version: number; // integer number, increments on update
  readonly createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update

  constructor(login: string, password: string) {
    this.id = crypto.randomUUID();
    this.login = login;
    this.password = password;
    this.version = 1;
    this.createdAt = getDateStamp();
    this.updatedAt = this.createdAt;
    console.log(this);
  }
}
