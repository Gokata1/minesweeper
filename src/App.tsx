import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <h1>MineSweeper</h1>
      <div className="heading-wrapper">
        <div className="game-wrapper">
          <GameBoard />
        </div>
      </div>
    </>
  );
}

export default App;
