import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArtistService {
  constructor(private db: PrismaService) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.db.artist.create({ data: createArtistDto });
  }

  async findAll(): Promise<Artist[]> {
    return this.db.artist.findMany();
  }

  async findOne(id: string): Promise<Artist> {
    const artist = await this.db.artist.findUnique({ where: { id } });
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    const artistToUpdate = await this.db.artist.findUnique({ where: { id } });
    if (!artistToUpdate) {
      throw new NotFoundException('Artist not found');
    }
    return this.db.artist.update({
      where: { id },
      data: updateArtistDto,
    });
  }

  async remove(id: string): Promise<Artist> {
    const artistToRemove = await this.db.artist.findUnique({ where: { id } });
    if (!artistToRemove) {
      throw new NotFoundException('Artist not found');
    }
    return this.db.artist.delete({ where: { id } });
  }
}
