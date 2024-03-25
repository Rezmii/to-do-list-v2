export class Set {
  constructor(title, emoji, bgc, todoesId) {
    this.title = title;
    this.emoji = emoji;
    this.bgc = bgc;
    this.todoesId = todoesId;
  }

  addSetToArray = (arr) => {
    arr.push(this);
  };
}
