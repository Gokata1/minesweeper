import { useState } from "react";
import "./App.css";
import generateBombPlacements from "./utils/generateBombPlacements";

function App() {
  const [status, setStatus] = useState();
  const [gameSize, setGameSize] = useState(6);
  const [numberOfBombs, setNumberOfBombs] = useState(10);

  const generateGameBoard = () => {
    return;
  };

  // console.log(">>>>", 10 * Math.random());

  // console.log(
  //   generateBombPlacements({ numberOfBombs: numberOfBombs, gridSize: gameSize })
  // );
  const bombArray = generateBombPlacements({
    numberOfBombs: numberOfBombs,
    gridSize: gameSize,
  });

  /*
  Point could be from gridSize*gridSize (6*6)=36
  (0,0) = (0*6)+(0*1)+1 = 1
  (0,1) = (0*6)+(1*1)+1 = 2
  .
  .
  .
  (5,5) = (5*6)+(5*1)+1 = 36
  */

  return (
    <>
      <div className="heading-wrapper">
        <h1>MineSweeper</h1>
      </div>
    </>
  );
}

export default App;
