import { v4 as uuidv4 } from 'uuid';

import { UpdateArtistDto } from '../dto/update-artist.dto';

export class Artist {
  readonly id: string;
  name: string;
  grammy: boolean;

  constructor(updateArtistDto: UpdateArtistDto) {
    this.id = uuidv4();
    Object.assign(this, updateArtistDto);
  }
}
