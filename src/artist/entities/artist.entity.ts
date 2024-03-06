export class Artist {
  readonly id: string; // crypto.randomUUID();
  name: string;
  grammy: boolean;

  constructor(name: string, grammy: boolean) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.grammy = grammy;
  }
}
