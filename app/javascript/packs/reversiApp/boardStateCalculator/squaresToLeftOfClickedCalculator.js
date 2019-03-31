const INDEX_OF_FURTHEST_LEFT_COLUMN = 0;

export const flipSandwichedSquaresToLeftOfClickedSquare = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  const clickedRow = boardState[clickedSquare.row];
  const otherTeamsColor = currentTeamsColor === "bl" ? "wh" : "bl";

  let numberOfPossiblySandwichedSquares = 0;
  let numberOfSandwichedSquares;
  let indexOfPossiblySandwichedSquare = clickedSquare.column - 1;

  while (indexOfPossiblySandwichedSquare >= 0) {
    const colorOfCurrent = clickedRow[indexOfPossiblySandwichedSquare];

    if (
      colorOfCurrent === otherTeamsColor &&
      indexOfPossiblySandwichedSquare !== INDEX_OF_FURTHEST_LEFT_COLUMN
    ) {
      numberOfPossiblySandwichedSquares++;
    } else if (colorOfCurrent === currentTeamsColor) {
      numberOfSandwichedSquares = numberOfPossiblySandwichedSquares;
      break;
    } else if (
      indexOfPossiblySandwichedSquare === INDEX_OF_FURTHEST_LEFT_COLUMN ||
      colorOfCurrent === null
    ) {
      return boardState;
    }
    indexOfPossiblySandwichedSquare--;
  }

  if (numberOfSandwichedSquares > 0) {
    boardState[clickedSquare.row][clickedSquare.column] = currentTeamsColor;
  }

  let indexOfSandwichedSquare = clickedSquare.column - 1;
  [...Array(numberOfSandwichedSquares)].forEach(() => {
    boardState[clickedSquare.row][indexOfSandwichedSquare] = currentTeamsColor;
    indexOfSandwichedSquare--;
  });
  return boardState;
};
