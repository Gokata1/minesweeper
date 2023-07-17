// import { GameCellObject } from "../components/GameCell/GameCell";
import { GameCellObject } from "./GameCellObject";

export interface GameCellProps {
  x: number;
  y: number;
}

export function generateGameBoard(boardSize: number) {
  const gameBoard = [];

  for (let x = 0; x < boardSize; x++) {
    const row = [];
    for (let y = 0; y < boardSize; y++) {
      const cell = new GameCellObject(x, y);
      row.push(cell);
    }
    gameBoard.push(row);
  }
  return gameBoard;
}
