export class GameCellObject {
  value: number;
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.value = 0;
  }

  cellData() {
    console.log(this.value);
  }

  setValue(value: number) {
    this.value = value;
  }
}
