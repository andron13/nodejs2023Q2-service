import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';

import { FavoritesService } from './favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favServ: FavoritesService) {}

  @Get()
  findAll() {
    return this.favServ.findAll();
  }

  // Artists Routing
  @Post('artist/:id')
  addArtist(@Param('id', ParseUUIDPipe) id: string) {
    const type = 'artists';
    return this.postEntity(id, type);
  }

  @Delete('artist/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeArtist(@Param('id', ParseUUIDPipe) id: string) {
    return this.favServ.remove(id, 'artists');
  }

  // Albums Routing
  @Post('album/:id')
  addAlbum(@Param('id', ParseUUIDPipe) id: string) {
    const type = 'albums';
    return this.postEntity(id, type);
  }

  @Delete('album/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeAlbum(@Param('id', ParseUUIDPipe) id: string) {
    return this.favServ.remove(id, 'albums');
  }

  // Tracks Routing
  @Post('track/:id')
  addTrack(@Param('id', ParseUUIDPipe) id: string) {
    const type = 'tracks';
    return this.postEntity(id, type);
  }

  @Delete('track/:id')
  @HttpCode(StatusCodes.NO_CONTENT)
  removeTrack(@Param('id', ParseUUIDPipe) id: string) {
    return this.favServ.remove(id, 'tracks');
  }

  postEntity(id: string, type) {
    const doesEntityExistInDB = this.favServ.existInDb(id, type);
    const doesEntityIdExistInFavs = this.favServ.existInFavs(id, type);
    if (!doesEntityExistInDB) {
      throw new UnprocessableEntityException(`${type} not found`);
    }
    if (doesEntityIdExistInFavs) {
      console.log(`${type}-id: ${id} Exist In Favs`);
    }
    this.favServ.create(id, type);
    return this.favServ.getById(id, type);
  }
}
