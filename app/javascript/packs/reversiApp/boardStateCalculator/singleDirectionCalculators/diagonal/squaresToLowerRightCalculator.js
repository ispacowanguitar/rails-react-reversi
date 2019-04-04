export const flipSandwichedSquaresToLowerRightOfClicked = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  if (clickedSquare.row === 7 || clickedSquare.column === 7) {
    return boardState;
  }
  const otherTeamsColor = currentTeamsColor === "bl" ? "wh" : "bl";
  let numberOfSandwichedSquares = 0;
  let currentRow = clickedSquare.row + 1;
  let currentCol = clickedSquare.column + 1;
  while (true) {
    if (currentRow > 7 || currentCol > 7) {
      return boardState;
    }
    const currentSquare = boardState[currentRow][currentCol];

    if (currentSquare === otherTeamsColor) {
      numberOfSandwichedSquares++;
    } else if (
      currentSquare === currentTeamsColor &&
      numberOfSandwichedSquares > 0
    ) {
      break;
    } else if (
      currentSquare === currentTeamsColor &&
      numberOfSandwichedSquares === 0
    ) {
      return boardState;
    } else if (currentSquare === null || currentRow === 7 || currentCol === 7) {
      return boardState;
    }
    currentRow++;
    currentCol++;
  }

  let rowOfSandwichedSquare = clickedSquare.row;
  let colOfSandwichedSquare = clickedSquare.column;
  [...Array(numberOfSandwichedSquares + 1)].forEach(() => {
    boardState[rowOfSandwichedSquare][
      colOfSandwichedSquare
    ] = currentTeamsColor;
    rowOfSandwichedSquare++;
    colOfSandwichedSquare++;
  });
  return boardState;
};
