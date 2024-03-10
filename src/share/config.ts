import * as dotenv from 'dotenv';

dotenv.config();

export const PORT: number = +process.env.PORT || 4000;
export const CRYPT_SALT: number = +process.env.CRYPT_SALT || 10;
export const JWT_SECRET_KEY: string =
  process.env.JWT_SECRET_KEY || 'secret123123';
export const JWT_SECRET_REFRESH_KEY: string =
  process.env.JWT_SECRET_REFRESH_KEY || 'secret123123';
export const TOKEN_EXPIRE_TIME: string = process.env.TOKEN_EXPIRE_TIME || '1h';
export const TOKEN_REFRESH_EXPIRE_TIME: string =
  process.env.TOKEN_REFRESH_EXPIRE_TIME || '24h';
