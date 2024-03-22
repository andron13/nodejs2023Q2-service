import { User } from '../user/entities/user.entity';

export const omitPassword = (user: User): Omit<User, 'password'> => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword as Omit<User, 'password'>;
};
