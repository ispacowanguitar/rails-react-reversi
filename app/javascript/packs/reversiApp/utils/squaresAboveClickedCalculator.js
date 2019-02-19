export const flipSandwichedSquaresAboveClickedSquare = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  // calculaaate number of sandwiched squares
  const clickedColumn = clickedSquare.column;
  const otherTeamsColor = currentTeamsColor === "black" ? "white" : "black";

  let numberOfPossiblySandwichedSquares = 0;
  let numberOfSandwichedSquares = 0;
  let indexOfPossiblySandwichedSquare = clickedSquare.row - 1;
  while (indexOfPossiblySandwichedSquare >= 0) {
    const colorOfCurrent =
      boardState[indexOfPossiblySandwichedSquare][clickedSquare.column];

    if (
      colorOfCurrent === otherTeamsColor &&
      indexOfPossiblySandwichedSquare < 8
    ) {
      numberOfPossiblySandwichedSquares++;
    } else if (colorOfCurrent === currentTeamsColor) {
      numberOfSandwichedSquares = numberOfPossiblySandwichedSquares;
      break;
    } else if (
      indexOfPossiblySandwichedSquare === 7 ||
      colorOfCurrent === null
    ) {
      return boardState;
    }
    indexOfPossiblySandwichedSquare--;
  }

  // flip sandwiached squares
  if (numberOfSandwichedSquares > 0) {
    boardState[clickedSquare.row][clickedSquare.column] = currentTeamsColor;
  }

  let indexOfSandwichedSquare = clickedSquare.row - 1;
  [...Array(numberOfSandwichedSquares)].forEach(() => {
    boardState[indexOfSandwichedSquare][
      clickedSquare.column
    ] = currentTeamsColor;
    indexOfSandwichedSquare--;
  });
  return boardState;
};
