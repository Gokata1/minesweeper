import { useState } from "react";
import styles from "./GameCell.module.css";

export interface GameCellProps {
  value: number;
}

export default function GameCell({ value }: GameCellProps) {
  const [open, setOpen] = useState(true);
  return (
    <button
      className={styles.cell}
      onClick={() => {
        setOpen(!open);
      }}
    >
      {open ? value : ""}
    </button>
  );
}
