import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { omitIsFav } from '../share/entityMethods';

@Injectable()
export class FavoritesService {
  constructor(private readonly db: PrismaService) {}

  async getAll() {
    const tracks = await this.db.track.findMany({
      where: { isFav: true },
    });
    const albums = await this.db.album.findMany({
      where: { isFav: true },
    });
    const artists = await this.db.artist.findMany({
      where: { isFav: true },
    });
    return {
      tracks: tracks.map((track) => omitIsFav(track)),
      albums: albums.map((album) => omitIsFav(album)),
      artists: artists.map((artist) => omitIsFav(artist)),
    };
  }

  async addTrack(id: string) {
    try {
      return await this.db.track.update({
        where: { id },
        data: {
          isFav: true,
        },
      });
    } catch (e) {
      throw new UnprocessableEntityException('Track not found');
    }
  }

  async addArtist(id: string) {
    try {
      return await this.db.artist.update({
        where: { id },
        data: {
          isFav: true,
        },
      });
    } catch (e) {
      throw new UnprocessableEntityException('Artist not found');
    }
  }

  async addAlbum(id: string) {
    try {
      return await this.db.album.update({
        where: { id },
        data: {
          isFav: true,
        },
      });
    } catch (e) {
      throw new UnprocessableEntityException('Album not found');
    }
  }

  async deleteArtist(id: string) {
    try {
      return await this.db.artist.update({
        where: { id },
        data: {
          isFav: false,
        },
      });
    } catch (e) {
      throw new NotFoundException('Artist not found');
    }
  }

  async deleteTrack(id: string) {
    try {
      return await this.db.track.update({
        where: { id },
        data: {
          isFav: false,
        },
      });
    } catch (e) {
      throw new NotFoundException('Track not found');
    }
  }

  async deleteAlbum(id: string) {
    try {
      return await this.db.album.update({
        where: { id },
        data: {
          isFav: false,
        },
      });
    } catch (e) {
      throw new NotFoundException('Album not found');
    }
  }
}
