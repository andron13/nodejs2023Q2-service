import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { Database } from '../database/database';

@Injectable()
export class ArtistService {
  constructor(private db: Database) {}

  create(createArtistDto: CreateArtistDto): Artist {
    const newArtist = new Artist(createArtistDto);
    this.db.artists.push(newArtist);
    return newArtist;
  }

  findAll(): Artist[] {
    return this.db.artists;
  }

  findOne(id: string): Artist {
    const artist = this.db.artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

  update(id: string, updateArtistDto: UpdateArtistDto): Artist {
    const artistIndex = this.db.artists.findIndex((artist) => artist.id === id);
    if (artistIndex === -1) {
      throw new NotFoundException('Artist not found');
    }
    const artist = this.db.artists[artistIndex];
    Object.assign(artist, updateArtistDto);
    return artist;
  }

  remove(id: string): Artist {
    const artistIndex = this.db.artists.findIndex((artist) => artist.id === id);
    if (artistIndex === -1) {
      throw new NotFoundException('Artist not found');
    }
    const [deletedArtist] = this.db.artists.splice(artistIndex, 1);
    return deletedArtist;
  }
}
