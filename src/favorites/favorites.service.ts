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
    if (!this.exist(id, type) && this.entityExist(id, type)) {
      this.db.favorites[type].push(id);
    }
  }
  remove(id: string, type) {
    // if (this.exist(id, type)) this.db.favorites.deleteItem(id, type);
  }

  private exist(id: string, type: 'artists' | 'albums' | 'tracks'): boolean {
    return this.db.favorites[type].includes(id);
  }

  private entityExist(
    id: string,
    type: 'artists' | 'albums' | 'tracks',
  ): boolean {
    switch (type) {
      case 'artists':
        return this.db.artists.some((artist) => artist.id === id);
      case 'albums':
        return this.db.albums.some((album) => album.id === id);
      case 'tracks':
        return this.db.tracks.some((track) => track.id === id);
    }
  }
}
