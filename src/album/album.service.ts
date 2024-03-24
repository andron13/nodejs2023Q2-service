import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlbumService {
  constructor(private readonly db: PrismaService) {}

  async findAll(): Promise<Album[]> {
    return this.db.album.findMany();
  }

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.db.album.create({ data: createAlbumDto });
  }

  async findOne(id: string): Promise<Album> {
    const album: Album = await this.db.album.findUnique({ where: { id } });
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    return album;
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    const albumToUpdate = await this.db.album.findUnique({ where: { id } });
    if (!albumToUpdate) {
      throw new NotFoundException('Album not found');
    }
    return this.db.album.update({
      where: { id },
      data: updateAlbumDto,
    });
  }

  async remove(id: string): Promise<Album> {
    const albumToRemove = await this.db.album.findUnique({ where: { id } });
    if (!albumToRemove) {
      throw new NotFoundException('Album not found');
    }
    return this.db.album.delete({ where: { id } });
  }
}
