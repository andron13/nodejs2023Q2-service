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
  const newTime = new Date(oldTime.getTime() + 1000);

  return newTime.toISOString();
};

export const omitFavoritesId = <TEntity>(
  entity: TEntity & { favoritesId: unknown },
): Omit<TEntity, 'favoritesId'> => {
  const { favoritesId, ...entityWithoutFavoritesId } = entity;
  return entityWithoutFavoritesId;
};

export function omitIsFav<TEntity extends { isFav: unknown }>(
  entity: TEntity,
): Omit<TEntity, 'isFav'> {
  const { isFav, ...rest } = entity;
  return rest;
}
