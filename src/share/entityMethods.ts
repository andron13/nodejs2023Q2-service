// import { User } from '../user/entities/user.entity';

export const omitPassword = (user) => {
  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};

export const dateTransform = (stringDate: string): number => {
  return Math.floor(Date.parse(stringDate) / 1000);
};

export const dateTransformByUser = (user) => {
  const updatedUser = { ...user };

  updatedUser.createdAt = dateTransform(user.createdAt);
  updatedUser.updatedAt = dateTransform(user.updatedAt);

  return updatedUser;
};

export const incrementTime = (oldTimeISO) => {
  const oldTime = new Date(oldTimeISO);

  // Добавляем 1000 миллисекунд == 1 секунда
  const newTime = new Date(oldTime.getTime() + 1000);

  // Переводим обратно в строку формата ISO
  const newTimeISO = newTime.toISOString();

  return newTimeISO;
};
