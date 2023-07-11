export function populateBoardWithClues(gameBoard: number[][]) {
  gameBoard.forEach((row, i) => {
    row.forEach((cell, j) => {
      let count = 0;
      if (cell !== -1) {
        // console.log(neighbourCount(gameBoard, i, j));
        // gameBoard[i][j] = neighbourCount(gameBoard, i, j);
        for (let m = i - 1; m < i + 2; m++) {
          for (let n = i - 1; n < i + 2; n++) {
            if (
              m < 0 ||
              n < 0 ||
              m > gameBoard.length - 1 ||
              n > gameBoard.length - 1 ||
              (m === i && n === j)
            ) {
            } else {
              console.log(">>>>>", m, n, "value>>", gameBoard[m][n]);
              if (gameBoard[m][n] === -1) count++;
            }
          }
        }
        gameBoard[i][j] = count;
      }
    });
  });
  //   console.log(">>>>>", gameBoard);
  //   setTimeout(() => {
  //     neighbourCount(gameBoard, 0, 0);
  //   }, 1000);
  return gameBoard;
}

function neighbourCount(arr: number[][], i: number, j: number) {
  let count = 0;
  for (let m = i - 1; m < i + 2; m++) {
    for (let n = i - 1; n < i + 2; n++) {
      if (
        m < 0 ||
        n < 0 ||
        m > arr.length - 1 ||
        n > arr.length - 1 ||
        (m === i && n === j)
      ) {
      } else {
        // console.log(">>>>>", m, n, "value", arr[m]);
        if (arr[m][n] === -1) count++;
      }
    }
  }
  console.log("Count>>>", count);
  return count;
}
