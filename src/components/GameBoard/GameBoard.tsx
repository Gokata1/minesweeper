import { useRef } from "react";
import { generateGameBoard } from "../../utils/generateGameBoard";
import styles from "./GameBoard.module.css";
import GameCell from "../GameCell/GameCell";
import { generateBombPlacements } from "../../utils/generateBombPlacements";
import { populateBoardWithClues } from "../../utils/populateBoardWithClues";
import { neighbors } from "../../utils/NeighboursArray";

export interface GameBoardProps {
  gameSize: number;
  bombNumber: number;
}

const TILE_STATUS = {
  HIDDEN: "hidden",
  MINE: "mine",
  NUMBER: "number",
  MARKED: "marked",
};

const GameBoard = ({ gameSize, bombNumber }: GameBoardProps) => {
  const gameBoard = generateGameBoard(gameSize);
  generateBombPlacements(gameSize, bombNumber, gameBoard);
  populateBoardWithClues(gameBoard);

  const markedLabelRef = useRef<any>();
  const gameCounter = useRef(0);

  const changeMarkedCount = (value: number) => {
    // console.log(">>>>", markedLabelRef.current.innerText);
    markedLabelRef.current.innerText =
      parseInt(markedLabelRef.current.innerText) + value;
  };

  const handleZeroClick = (x: number, y: number) => {
    // console.log("Clicked coordinates are", x, y);
    for (const [dRow, dCol] of neighbors) {
      const newRow = x + dRow;
      const newCol = y + dCol;
      if (
        newRow >= 0 &&
        newRow < gameSize &&
        newCol >= 0 &&
        newCol < gameSize
      ) {
        // console.log(">>>>", gameBoard[newRow][newCol]);
        const button = document.getElementById(
          "cell(" + newRow + "," + newCol + ")"
        );
        if (
          gameBoard[newRow][newCol].value !== -1 &&
          button?.dataset.state === TILE_STATUS.HIDDEN
        ) {
          // console.log(">>>>BUtton state", button);
          if (button) button.click();
        }
        // const button = buttonRefs.current[newRow][newCol];
      }
    }
  };

  return (
    <div className="game-wrapper">
      <div className={styles.counterWrapper}>
        <label ref={markedLabelRef} className="marked-counter">
          {bombNumber}
        </label>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset!
        </button>
        <label className="game-counter">{gameCounter.current}</label>
      </div>
      <div className={styles.board}>
        {gameBoard.map((gameRow, i) => {
          return (
            <div key={"row" + i} className={styles.rowDisplay}>
              {gameRow.map((gameCell, j) => {
                return (
                  <GameCell
                    key={"cell(" + i + "," + j + ")"}
                    id={"cell(" + i + "," + j + ")"}
                    {...gameCell}
                    setMarkedCount={changeMarkedCount}
                    handleZeroClick={handleZeroClick}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
