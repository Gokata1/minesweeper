export function populateBombs(bombArray: string[], gameBoard: number[][]) {
  bombArray.forEach((bomb) => {
    const bombCell = bomb.split(",").map((n) => parseInt(n));
    gameBoard[bombCell[0]][bombCell[1]] = -1;
  });
  return gameBoard;
}
