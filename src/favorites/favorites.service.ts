import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { omitFavoritesId } from '../share/entityMethods';

@Injectable()
export class FavoritesService {
  constructor(private readonly db: PrismaService) {}

  async getAll() {
    const favs = await this.db.favorites.findUnique({
      where: { id: 'favs' },
      select: { artists: true, albums: true, tracks: true },
    });

    if (!favs) {
      return { artists: [], albums: [], tracks: [] };
    }

    const outputData = {
      albums: favs.albums?.map((el) => omitFavoritesId(el)),
      artists: favs.artists?.map((el) => omitFavoritesId(el)),
      tracks: favs.tracks?.map((el) => omitFavoritesId(el)),
    };

    return {
      artists: outputData.artists ?? [],
      albums: outputData.albums ?? [],
      tracks: outputData.tracks ?? [],
    };
  }
  async addArtist(id: string) {
    const artists = await this.db.artist.findMany();
    const favs = await this.db.favorites.findMany();
    console.log({ favs });
    console.log({ artists });
    const artist = await this.db.artist.findUnique({
      where: { id },
    });
    console.log({ artist });
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    // if (artist.favoritesId === 'favs') {
    //   throw new BadRequestException('Artist is already in favorites');
    // }
    const test = await this.db.artist.update({
      where: { id },
      data: { favoritesId: 'favs' },
    });
    console.log({ test });
    return test;
  }
  async addTrack(id: string) {
    const track = await this.db.track.findUnique({
      where: { id },
    });
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    // if (track.favoritesId === 'favs') {
    //   throw new BadRequestException('Track is already in favorites');
    // }
    return this.db.track.update({
      where: { id },
      data: { favoritesId: 'favs' },
    });
  }

  async addAlbum(id: string) {
    const album = await this.db.album.findUnique({
      where: { id },
    });
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    // if (album.favoritesId === 'favs') {
    //   throw new BadRequestException('Album is already in favorites');
    // }
    return this.db.album.update({
      where: { id },
      data: { favoritesId: 'favs' },
    });
  }
  async deleteArtist(id: string) {
    const artist = await this.db.artist.findUnique({
      where: { id },
    });
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    // if(artist.favoritesId !== 'favs'){
    //   throw new BadRequestException('Artist is not in favorites');
    // }
    return this.db.artist.update({
      where: { id },
      data: { favoritesId: null },
    });
  }

  async deleteTrack(id: string) {
    const track = await this.db.track.findUnique({
      where: { id },
    });
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    // if(track.favoritesId !== 'favs'){
    //   throw new BadRequestException('Track is not in favorites');
    // }
    return this.db.track.update({
      where: { id },
      data: { favoritesId: null },
    });
  }

  async deleteAlbum(id: string) {
    const album = await this.db.album.findUnique({
      where: { id },
    });
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    // if(album.favoritesId !== 'favs'){
    //   throw new BadRequestException('Album is not in favorites');
    // }
    return this.db.album.update({
      where: { id },
      data: { favoritesId: null },
    });
  }
}
