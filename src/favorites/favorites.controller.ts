import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  HttpCode,
  ParseUUIDPipe,
  UnprocessableEntityException,
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
    if (this.favoritesService.exist(id, 'artists'))
      this.favoritesService.create(id, 'artists');
    else throw new UnprocessableEntityException('User not found');
  }

  @Delete('artist/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeArtist(@Param('id', ParseUUIDPipe) id: string) {
    return this.favoritesService.remove(id, 'artists');
  }

  // Albums Routing
  @Post('album/:id')
  addAlbum(@Param('id', ParseUUIDPipe) id: string) {
    if (this.favoritesService.exist(id, 'albums'))
      this.favoritesService.create(id, 'albums');
    else throw new UnprocessableEntityException('User not found');
  }

  @Delete('album/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeAlbum(@Param('id', ParseUUIDPipe) id: string) {
    return this.favoritesService.remove(id, 'albums');
  }

  // Tracks Routing
  @Post('track/:id')
  addTrack(@Param('id', ParseUUIDPipe) id: string) {
    if (this.favoritesService.exist(id, 'tracks'))
      this.favoritesService.create(id, 'tracks');
    else throw new UnprocessableEntityException('User not found');
  }

  @Delete('track/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeTrack(@Param('id', ParseUUIDPipe) id: string) {
    return this.favoritesService.remove(id, 'tracks');
  }
}
