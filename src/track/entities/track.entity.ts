export class Track {
  readonly id: string; // crypto.randomUUID();
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  duration: number; // integer number

  constructor(
    name: string,
    duration: number,
    artistId: string | null = null,
    albumId: string | null = null,
  ) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.duration = duration;
    this.artistId = artistId;
    this.albumId = albumId;
  }
}
