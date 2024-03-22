// import { User } from '../user/entities/user.entity';

export const omitPassword = (user) => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
