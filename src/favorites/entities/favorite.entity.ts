export class Favorite {
  artists: string[]; // favorite artists ids
  albums: string[]; // favorite albums ids
  tracks: string[]; // favorite tracks ids

  constructor(fav: Favorite) {
    this.artists = fav.artists;
    this.albums = fav.artists;
    this.tracks = fav.artists;
  }
}
