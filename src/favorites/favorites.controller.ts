import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';

import { FavoritesService } from './favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async findAll() {
    return this.favoritesService.getAll();
  }

  // Artists Routing
  @Post('artist/:id')
  async addArtist(@Param('id', ParseUUIDPipe) id: string) {
    return await this.favoritesService.addArtist(id);
  }

  @Delete('artist/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  async removeArtist(@Param('id', ParseUUIDPipe) id: string) {
    return await this.favoritesService.deleteArtist(id);
  }

  // Albums Routing
  @Post('album/:id')
  async addAlbum(@Param('id', ParseUUIDPipe) id: string) {
    return await this.favoritesService.addAlbum(id);
  }

  @Delete('album/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  async removeAlbum(@Param('id', ParseUUIDPipe) id: string) {
    return await this.favoritesService.deleteAlbum(id);
  }

  // Tracks Routing
  @Post('track/:id')
  async addTrack(@Param('id', ParseUUIDPipe) id: string) {
    return await this.favoritesService.addTrack(id);
  }

  @Delete('track/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  async removeTrack(@Param('id', ParseUUIDPipe) id: string) {
    return await this.favoritesService.deleteTrack(id);
  }
}
