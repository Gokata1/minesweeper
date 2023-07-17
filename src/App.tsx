import { useState, createContext } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import GameContext from "./utils/GameContext";

enum GAME_STATE {
  WON = "won",
  LOST = "lost",
  LIVE = "live",
}

// const GameContext = createContext("");

function App() {
  const GAME_SIZE = 10;
  const BOMB_NUMBER = 20;

  const [gameStatus, setGameStatus] = useState(GAME_STATE.LIVE);

  return (
    <GameContext.Provider value={gameStatus}>
      <h1>MineSweeper</h1>
      <GameBoard gameSize={GAME_SIZE} bombNumber={BOMB_NUMBER} />
    </GameContext.Provider>
  );
}

export default App;
