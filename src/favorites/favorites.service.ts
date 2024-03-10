import { Injectable } from '@nestjs/common';

import { Album } from '../album/entities/album.entity';
import { Artist } from '../artist/entities/artist.entity';
import { Database } from '../database/database';
import { Track } from '../track/entities/track.entity';

@Injectable()
export class FavoritesService {
  constructor(private db: Database) {}

  findAll() {
    const artistsIDs: string[] = this.db.favorites.artists;
    const albumsIDs: string[] = this.db.favorites.albums;
    const tracksIDs: string[] = this.db.favorites.tracks;
    const artists: Artist[] = this.db.findAllFavArtists(artistsIDs);
    const albums: Album[] = this.db.findAllFavAlbums(albumsIDs);
    const tracks: Track[] = this.db.findAllFavTracks(tracksIDs);
    return {
      artists,
      albums,
      tracks,
    };
  }

  create(id: string, type: 'artists' | 'albums' | 'tracks') {
    this.db.favorites[type].push(id);
  }
  remove(id: string, type: string) {
    this.db.favorites[type] = this.db.favorites[type].filter((el) => el !== id);
    this.setToNull(id, type);
  }

  existInDb(id: string, type: 'artists' | 'albums' | 'tracks'): boolean {
    return this.db.entityExistInDB(id, type);
  }

  existInFavs(id: string, type: 'artists' | 'albums' | 'tracks'): boolean {
    switch (type) {
      case 'artists':
        return this.db.favorites.artists.some((artistId) => artistId === id);
      case 'albums':
        return this.db.favorites.albums.some((albumId) => albumId === id);
      case 'tracks':
        return this.db.favorites.tracks.some((trackId) => trackId === id);
    }
  }
  getById(id: string, type: string) {
    return this.db[type].find((el) => el.id === id);
  }

  setToNull(id: string, type: string) {
    if (type === 'artists') {
      this.db.setArtistIdToNull(id);
    }
    if (type === 'albums') {
      this.db.setAlbumIdToNull(id);
    }
  }
}
