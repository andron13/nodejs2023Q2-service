import { Injectable } from '@nestjs/common';

import { Album } from '../album/entities/album.entity';
import { Artist } from '../artist/entities/artist.entity';
import { Favorite } from '../favorites/entities/favorite.entity';
import { Track } from '../track/entities/track.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class Database {
  public users: User[] = mockUsers;
  albums: Album[] = [];
  artists: Artist[] = [];
  favorites: Favorite[] = [];
  tracks: Track[] = [];
}

const mockUsers = [
  {
    id: 'b3d91238-1ef1-4d74-9422-e9dd4852f2c0', // uuid v4
    login: 'user1',
    password: 'password1',
    version: 1, // integer number, increments on update
    createdAt: 1641987464832, // timestamp of creation
    updatedAt: 1641987464832, // timestamp of last update
  },
  {
    id: 'db193170-4838-423f-a065-605400667637', // uuid v4
    login: 'user2',
    password: 'password2',
    version: 1, // integer number, increments on update
    createdAt: 1641987464832, // timestamp of creation
    updatedAt: 1641987464832, // timestamp of last update
  },
];
