import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  HttpCode,
  ParseUUIDPipe,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';

import { Database } from '../database/database';

@Controller('favs')
export class FavoritesController {
  constructor(private db: Database) {}

  @Get()
  findAll() {
    return this.db.favorites;
  }

  // Artists Routing
  @Get('/artist')
  findFavoriteArtists() {
    return this.db.favorites.artists;
  }

  @Post('artist/:id')
  addArtist(@Param('id', ParseUUIDPipe) id: string) {
    if (!this.db.favorites.findOne(id, 'artists'))
      this.db.favorites.addItem(id, 'artists');
  }

  @Delete('artist/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeArtist(@Param('id', ParseUUIDPipe) id: string) {
    if (this.db.favorites.findOne(id, 'artists'))
      return this.db.favorites.deleteItem(id, 'artists');
  }

  // Albums Routing
  @Get('/album')
  findFavoriteAlbums() {
    return this.db.favorites.albums;
  }

  @Post('album/:id')
  addAlbum(@Param('id', ParseUUIDPipe) id: string) {
    if (!this.db.favorites.findOne(id, 'albums'))
      this.db.favorites.addItem(id, 'albums');
  }

  @Delete('album/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeAlbum(@Param('id', ParseUUIDPipe) id: string) {
    if (this.db.favorites.findOne(id, 'albums'))
      return this.db.favorites.deleteItem(id, 'albums');
  }

  // Tracks Routing
  @Get('/track')
  findFavoriteTracks() {
    return this.db.favorites.tracks;
  }

  @Post('track/:id')
  addTrack(@Param('id', ParseUUIDPipe) id: string) {
    if (!this.db.favorites.findOne(id, 'tracks'))
      this.db.favorites.addItem(id, 'tracks');
  }

  @Delete('track/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeTrack(@Param('id', ParseUUIDPipe) id: string) {
    if (this.db.favorites.findOne(id, 'tracks'))
      return this.db.favorites.deleteItem(id, 'tracks');
  }
}
