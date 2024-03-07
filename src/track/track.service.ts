import { Injectable } from '@nestjs/common';

import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Database } from '../database/database';

@Injectable()
export class TrackService {
  constructor(private db: Database) {}

  findAll() {
    return this.db.tracks;
  }

  create(createTrackDto: CreateTrackDto) {
    return 'This action adds a new track';
  }

  findOne(id: string) {
    return `This action returns a #${id} track`;
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return `This action updates a #${id} track`;
  }

  remove(id: string) {
    return `This action removes a #${id} track`;
  }
}
