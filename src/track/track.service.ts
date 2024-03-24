import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrackService {
  constructor(private db: PrismaService) {}

  async findAll(): Promise<Track[]> {
    return this.db.track.findMany();
  }

  async create(createTrackDto: CreateTrackDto) {
    return this.db.track.create({ data: createTrackDto });
  }

  async findOne(id: string) {
    const track = await this.db.track.findUnique({ where: { id } });
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    return track;
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    const trackToUpdate = await this.db.track.findUnique({ where: { id } });

    if (!trackToUpdate) {
      throw new NotFoundException('Track not found');
    }

    return this.db.track.update({
      where: { id },
      data: updateTrackDto,
    });
  }

  async remove(id: string) {
    const trackToRemove = await this.db.track.findUnique({ where: { id } });

    if (!trackToRemove) {
      throw new NotFoundException('Track not found');
    }

    return this.db.track.delete({ where: { id } });
  }
}
