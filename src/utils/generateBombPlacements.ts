export interface FunctionTypes {
  numberOfBombs: number;
  gridSize: number;
}

function generateBombPlacements({ numberOfBombs, gridSize }: FunctionTypes) {
  const bombArray: string[] = [];
  let n = numberOfBombs;
  while (n > 0) {
    const x = Math.floor(gridSize * Math.random());
    const y = Math.floor(gridSize * Math.random());
    if (!bombArray.includes(x + "," + y)) {
      bombArray.push(x + "," + y);
      n--;
    }
  }
  return bombArray;
}

export default generateBombPlacements;
