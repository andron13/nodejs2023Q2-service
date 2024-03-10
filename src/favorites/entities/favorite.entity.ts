type favType = 'artists' | 'albums' | 'tracks';
export class Favorites {
  constructor(
    public artists: string[] = [],
    public albums: string[] = [],
    public tracks: string[] = [],
  ) {}
}
