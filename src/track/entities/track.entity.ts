import { v4 as uuidv4 } from 'uuid';

import { CreateTrackDto } from '../dto/create-track.dto';

export class Track {
  readonly id: string;
  name: string;
  duration: number; // integer number
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album

  constructor(createTrackDto: CreateTrackDto) {
    this.id = uuidv4();
    this.name = createTrackDto.name;
    this.duration = createTrackDto.duration;
    this.artistId = createTrackDto.artistId;
    this.albumId = createTrackDto.albumId;
  }
}
