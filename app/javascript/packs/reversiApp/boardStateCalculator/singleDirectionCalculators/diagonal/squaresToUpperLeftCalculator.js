export const flipSandwichedSquaresToUpperLeftOfClicked = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  if (clickedSquare.row === 0 || clickedSquare.column === 0) {
    return boardState;
  }

  const otherTeamsColor = currentTeamsColor === "bl" ? "wh" : "bl";
  let numberOfSandwichedSquares = 0;
  let currentRow = clickedSquare.row - 1;
  let currentCol = clickedSquare.column - 1;
  while (true) {
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
    } else if (currentSquare === null || currentRow === 0 || currentCol === 0) {
      return boardState;
    }
    currentRow--;
    currentCol--;
  }

  let rowOfSandwichedSquare = clickedSquare.row;
  let colOfSandwichedSquare = clickedSquare.column;
  [...Array(numberOfSandwichedSquares + 1)].forEach(() => {
    boardState[rowOfSandwichedSquare][
      colOfSandwichedSquare
    ] = currentTeamsColor;
    rowOfSandwichedSquare--;
    colOfSandwichedSquare--;
  });
  return boardState;
};
