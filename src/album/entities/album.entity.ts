export class Album {
  readonly id: string; // crypto.randomUUID();
  name: string;
  year: number;
  artistId: string | null; // refers to Artist

  constructor(name: string, year: number, artistId: string | null = null) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.year = year;
    this.artistId = artistId;
  }
}
