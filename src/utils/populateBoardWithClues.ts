// import { GameCellObject } from "../components/GameCell/GameCell";
import { GameCellObject } from "./GameCellObject";
import { neighbors } from "./NeighboursArray";

export function populateBoardWithClues(gameBoard: GameCellObject[][]) {
  const size = gameBoard.length;
  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 0; col < gameBoard[0].length; col++) {
      if (gameBoard[row][col].value !== -1) {
        let count = 0;
        for (const [dRow, dCol] of neighbors) {
          const newRow = row + dRow;
          const newCol = col + dCol;
          if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
            if (gameBoard[newRow][newCol].value === -1) {
              count++;
            }
          }
        }
        gameBoard[row][col].setValue(count);
      }
    }
  }
  return gameBoard;
}
