import { Injectable } from '@nestjs/common';

import { Favorites } from './entities/favorite.entity';
import { Database } from '../database/database';

@Injectable()
export class FavoritesService {
  constructor(private db: Database) {}

  findAll(): Favorites {
    return this.db.favorites;
  }

  create(id: string, type) {
    if (!this.exist(id, type)) this.db.favorites.addItem(id, type);
  }
  remove(id: string, type) {
    if (this.exist(id, type)) this.db.favorites.deleteItem(id, type);
  }

  exist(id: string, type) {
    return this.db.favorites.findOne(id, type);
  }
}
