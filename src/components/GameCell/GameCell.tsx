import { useState } from "react";
import styles from "./GameCell.module.css";

export interface GameCellProps {
  id: string;
  x: number;
  y: number;
  value: number;
  setMarkedCount: (value: number) => void;
  handleZeroClick: any;
}

const TILE_STATUS = {
  HIDDEN: "hidden",
  MINE: "mine",
  NUMBER: "number",
  MARKED: "marked",
};

export default function GameCell({
  id,
  x,
  y,
  value,
  setMarkedCount,
  handleZeroClick,
}: GameCellProps) {
  const [displayValue, setDisplayValue] = useState(false);

  const handleLeftClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.dataset.state === TILE_STATUS.HIDDEN) {
      if (value === 0) {
        e.currentTarget.dataset.state = TILE_STATUS.NUMBER;
        setDisplayValue(true);
        handleZeroClick(x, y);
      } else if (value === -1) {
        //Clicked on Bomb Logic Goes HERE
        e.currentTarget.dataset.state = TILE_STATUS.MINE;
        return;
      } else {
        //Clicked on any number logic goes here
        e.currentTarget.dataset.state = TILE_STATUS.NUMBER;
        setDisplayValue(true);
      }
    }
  };

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      e.currentTarget.dataset.state === TILE_STATUS.NUMBER ||
      e.currentTarget.dataset.state === TILE_STATUS.MINE
    )
      return;
    if (e.currentTarget.dataset.state === TILE_STATUS.HIDDEN) {
      e.currentTarget.dataset.state = TILE_STATUS.MARKED;
      setMarkedCount(-1);
    } else if (e.currentTarget.dataset.state === TILE_STATUS.MARKED) {
      e.currentTarget.dataset.state = TILE_STATUS.HIDDEN;
      setMarkedCount(+1);
    }
  };

  return (
    <div
      id={id}
      className={styles.cellStyles}
      data-state={TILE_STATUS.HIDDEN}
      onClick={(e) => handleLeftClick(e)}
      onAuxClick={handleRightClick}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      {displayValue && value}
      {/* {value} */}
    </div>
  );
}
