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
  public favorites: Favorites = new Favorites();

  // в class Database
  findAllFavArtists(): Artist[] {
    return this.artists.filter((artist) =>
      this.favorites.artists.includes(artist.id),
    );
  }
  findAllFavAlbums(): Album[] {
    return this.albums.filter((album) =>
      this.favorites.albums.includes(album.id),
    );
  }
  findAllFavTracks(): Track[] {
    const favs = this.favorites.tracks;
    return this.tracks.filter((track) => favs.includes(track.id));
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
}
