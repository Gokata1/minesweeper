export interface FunctionTypes {
  numberOfBombs: number;
  gridSize: number;
}

interface CoordinatesType {
  x: number;
  y: number;
}

function generateBombPlacements({ numberOfBombs, gridSize }: FunctionTypes) {
  let totalOptions = gridSize * gridSize;
  const bombArray: CoordinatesType[] = [];
  for (let i = 0; i < numberOfBombs; i++) {
    const val = Math.ceil(totalOptions * Math.random());
    const y = val % 6;
    const x = Math.ceil(val / 6);
    totalOptions--;
    bombArray.push({ x: x, y: y });
  }
  return bombArray;
}

export default generateBombPlacements;
