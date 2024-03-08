import { UpdateArtistDto } from '../dto/update-artist.dto';

export class Artist {
  readonly id: string;
  name: string;
  grammy: boolean;

  constructor(updateArtistDto: UpdateArtistDto) {
    this.id = crypto.randomUUID();
    Object.assign(this, updateArtistDto);
  }
}
