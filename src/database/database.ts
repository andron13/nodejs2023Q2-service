import { Injectable } from '@nestjs/common';

import { Album } from '../album/entities/album.entity';
import { Artist } from '../artist/entities/artist.entity';
import { Favorites } from '../favorites/entities/favorite.entity';
import { Track } from '../track/entities/track.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class Database {
  public users: User[] = [];
  public albums: Album[] = [];
  public artists: Artist[] = [];
  public tracks: Track[] = [];
  public favorites: Favorites = {
    artists: [],
    albums: [],
    tracks: [],
  };

  // в class Database
  findAllFavArtists(ids: string[]): Artist[] {
    return this.artists.filter((artist) => ids.includes(artist.id));
  }
  findAllFavAlbums(ids: string[]): Album[] {
    return this.albums.filter((album) => ids.includes(album.id));
  }
  findAllFavTracks(ids: string[]): Track[] {
    return this.tracks.filter((track) => ids.includes(track.id));
  }

  setArtistIdToNull(artistId: string): void {
    this.tracks.forEach((track) => {
      if (track.artistId === artistId) {
        track.artistId = null;
      }
    });
    this.albums.forEach((album) => {
      if (album.artistId === artistId) {
        album.artistId = null;
      }
    });
  }
  setAlbumIdToNull(albumId: string): void {
    this.tracks.forEach((track) => {
      if (track.albumId === albumId) {
        track.albumId = null;
      }
    });
  }

  entityExistInDB(id: string, type: 'artists' | 'albums' | 'tracks'): boolean {
    switch (type) {
      case 'artists':
        return this.artists.some((artist) => artist.id === id);
      case 'albums':
        return this.albums.some((album) => album.id === id);
      case 'tracks':
        return this.tracks.some((track) => track.id === id);
    }
  }
}
