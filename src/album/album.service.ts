import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';
import { Database } from '../database/database';

@Injectable()
export class AlbumService {
  constructor(private db: Database) {}

  async findAll(): Promise<Album[]> {
    return this.db.albums;
  }

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const newAlbum = new Album(createAlbumDto);
    this.db.albums.push(newAlbum);
    return Promise.resolve(newAlbum);
  }

  async findOne(id: string): Promise<Album> {
    const album: Album = this.db.albums.find((album) => album.id === id);
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    return album;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto): Album {
    const albumIndex = this.db.albums.findIndex((album) => album.id === id);
    if (albumIndex === -1) {
      throw new NotFoundException('Album not found');
    }
    const album = this.db.albums[albumIndex];
    Object.assign(album, updateAlbumDto);
    return album;
  }

  remove(id: string): Album {
    const albumIndex = this.db.albums.findIndex((album) => album.id === id);
    if (albumIndex === -1) {
      throw new NotFoundException('Album not found');
    }
    const [deletedAlbum] = this.db.albums.splice(albumIndex, 1);
    return deletedAlbum;
  }
}
