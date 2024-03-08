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
}
