import { Injectable } from '@nestjs/common';

import { Database } from '../database/database';

@Injectable()
export class FavoritesService {
  constructor(private db: Database) {}

  findAll() {
    const artists = this.db.findAllFavArtists();
    const albums = this.db.findAllFavAlbums();
    const tracks = this.db.findAllFavTracks();
    return {
      artists,
      albums,
      tracks,
    };
  }

  create(id: string, type: 'artists' | 'albums' | 'tracks') {
    if (!this.exist(id, type)) {
      this.db.favorites[type].push(id);
    }
  }
  remove(id: string, type) {
    // if (this.exist(id, type)) this.db.favorites.deleteItem(id, type);
  }

  exist(id: string, type: 'artists' | 'albums' | 'tracks'): boolean {
    console.log(`exist  ${id} ${type}  ${!!this.db.entityExist(id, type)}`);
    return this.db.entityExist(id, type);
  }
}
