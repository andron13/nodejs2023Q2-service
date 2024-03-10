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

import { FavoritesService } from './favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  // Artists Routing
  @Post('artist/:id')
  addArtist(@Param('id', ParseUUIDPipe) id: string) {
    this.favoritesService.create(id, 'artists');
  }

  @Delete('artist/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeArtist(@Param('id', ParseUUIDPipe) id: string) {
    return this.favoritesService.remove(id, 'artists');
  }

  // Albums Routing
  @Post('album/:id')
  addAlbum(@Param('id', ParseUUIDPipe) id: string) {
    this.favoritesService.create(id, 'albums');
  }

  @Delete('album/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeAlbum(@Param('id', ParseUUIDPipe) id: string) {
    return this.favoritesService.remove(id, 'albums');
  }

  // Tracks Routing
  @Post('track/:id')
  addTrack(@Param('id', ParseUUIDPipe) id: string) {
    this.favoritesService.create(id, 'tracks');
  }

  @Delete('track/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeTrack(@Param('id', ParseUUIDPipe) id: string) {
    return this.favoritesService.remove(id, 'tracks');
  }
}
