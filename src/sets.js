export class Set {
  constructor(id, title, emoji, bgc) {
    this.id = id;
    this.title = title;
    this.emoji = emoji;
    this.bgc = bgc;
  }

  addSetToArray = (arr) => {
    arr.push(this);
  };
}
