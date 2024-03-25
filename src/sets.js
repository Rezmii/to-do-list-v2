export class Set {
  constructor(title, emoji, bgc) {
    this.title = title;
    this.emoji = emoji;
    this.bgc = bgc;
  }

  addSetToArray = (arr) => {
    arr.push(this);
  };
}
