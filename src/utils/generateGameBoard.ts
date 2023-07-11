export function generateGameBoard(gameSize: number) {
  return new Array(gameSize).fill(0).map(() => new Array(gameSize).fill(0));
}
