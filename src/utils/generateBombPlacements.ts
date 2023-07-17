// import { GameCellObject } from "../components/GameCell/GameCell";
import { GameCellObject } from "./GameCellObject";

export function generateBombPlacements(
  gridSize: number,
  numberOfBombs: number,
  gameBoard: GameCellObject[][]
) {
  let n = numberOfBombs;
  const redundancyPreventionArray: string[] = [];
  while (n > 0) {
    const x = Math.floor(gridSize * Math.random());
    const y = Math.floor(gridSize * Math.random());
    if (!redundancyPreventionArray.includes(x + "," + y)) {
      redundancyPreventionArray.push(x + "," + y);
      gameBoard[x][y].setValue(-1);
      n--;
    }
  }
}
