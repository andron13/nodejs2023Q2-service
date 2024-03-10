import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';
import { Database } from '../database/database';

@Injectable()
export class TrackService {
  constructor(private db: Database) {}

  findAll() {
    return this.db.tracks;
  }

  async create(createTrackDto: CreateTrackDto): Promise<Track> {
    const newTrack = new Track(createTrackDto);
    this.db.tracks.push(newTrack);
    return Promise.resolve(newTrack);
  }

  async findOne(id: string): Promise<Track> {
    const track: Track = this.db.tracks.find((track) => track.id === id);
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    return track;
  }

  update(id: string, updateTrackDto: UpdateTrackDto): Track {
    const trackIndex = this.db.tracks.findIndex((track) => track.id === id);

    if (trackIndex === -1) {
      throw new NotFoundException('Track not found');
    }

    const track = this.db.tracks[trackIndex];
    Object.assign(track, updateTrackDto);

    return track;
  }

  remove(id: string): Track {
    const trackIndex = this.db.tracks.findIndex((track) => track.id === id);
    if (trackIndex === -1) {
      throw new NotFoundException('Track not found');
    }
    const [deletedTrack] = this.db.tracks.splice(trackIndex, 1);
    return deletedTrack;
  }
}
