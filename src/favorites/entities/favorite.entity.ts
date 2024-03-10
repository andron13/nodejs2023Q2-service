type favType = 'artists' | 'albums' | 'tracks';
export class Favorites {
  constructor(
    public artists: string[] = [],
    public albums: string[] = [],
    public tracks: string[] = [],
  ) {}
  //
  // addItem(item: string, type: favType): void {
  //   if (!this[type].includes(item)) {
  //     this[type].push(item);
  //   }
  // }
  //
  // deleteItem(item: string, type: favType): void {
  //   const index = this[type].indexOf(item);
  //   if (index !== -1) {
  //     this[type].splice(index, 1);
  //   }
  // }
  //
  // findOne(item: string, type: favType): boolean {
  //   return this[type].includes(item);
  // }
}
