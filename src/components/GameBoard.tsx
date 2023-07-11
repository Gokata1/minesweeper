import React from "react";
import generateBombPlacements from "../utils/generateBombPlacements";
import { generateGameBoard } from "../utils/generateGameBoard";
import { populateBombs } from "../utils/populateBombs";
import GameCell from "./GameCell";
import styles from "./GameBoard.module.css";
import { populateBoardWithClues } from "../utils/populateBoardWithClues";

export default function GameBoard() {
  const [gameSize, setGameSize] = React.useState(6);
  const [numberOfBombs, setNumberOfBombs] = React.useState(10);

  const [gameBoard, setGameBoard] = React.useState<number[][]>();

  const bombArray = generateBombPlacements({
    numberOfBombs: numberOfBombs,
    gridSize: gameSize,
  });

  React.useEffect(() => {
    setGameBoard(
      populateBombs(
        bombArray,
        populateBoardWithClues(generateGameBoard(gameSize))
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.board}>
      {gameBoard &&
        gameBoard.map((gameRow, i) => {
          return (
            <div key={"row+" + i} className={styles.row}>
              {gameRow.map((gameCell: any, j: any) => {
                return <GameCell key={"cell" + i + j} value={gameCell} />;
              })}
            </div>
          );
        })}
    </div>
  );
}
