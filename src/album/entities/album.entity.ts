import { v4 as uuidv4 } from 'uuid';

import { UpdateTrackDto } from '../../track/dto/update-track.dto';

export class Album {
  readonly id: string;
  name: string;
  year: number;
  artistId: string | null;

  constructor(updateTrackDto: UpdateTrackDto) {
    this.id = uuidv4();
    Object.assign(this, updateTrackDto);
  }
}
