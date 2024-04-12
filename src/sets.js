export class Set {
  static currentId = 0;

  constructor(title, emoji, bgc) {
    this.id = Set.currentId++;
    this.title = title;
    this.emoji = emoji;
    this.bgc = bgc;
  }
}
