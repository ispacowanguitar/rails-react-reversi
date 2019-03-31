export const flipSandwichedSquaresBelowClickedSquare = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  const otherTeamsColor = currentTeamsColor === "black" ? "white" : "black";

  let numberOfPossiblySandwichedSquares = 0;
  let numberOfSandwichedSquares = 0;
  let indexOfPossiblySandwichedSquare = clickedSquare.row + 1;
  while (indexOfPossiblySandwichedSquare <= 7) {
    const colorOfCurrent =
      boardState[indexOfPossiblySandwichedSquare][clickedSquare.column];

    if (
      colorOfCurrent === otherTeamsColor &&
      indexOfPossiblySandwichedSquare >= 0
    ) {
      numberOfPossiblySandwichedSquares++;
    } else if (colorOfCurrent === currentTeamsColor) {
      numberOfSandwichedSquares = numberOfPossiblySandwichedSquares;
      break;
    } else if (
      indexOfPossiblySandwichedSquare === 0 ||
      colorOfCurrent === null
    ) {
      return boardState;
    }
    indexOfPossiblySandwichedSquare++;
  }

  // flip sandwiached squares
  if (numberOfSandwichedSquares > 0) {
    boardState[clickedSquare.row][clickedSquare.column] = currentTeamsColor;
  }

  let indexOfSandwichedSquare = clickedSquare.row + 1;
  [...Array(numberOfSandwichedSquares)].forEach(() => {
    boardState[indexOfSandwichedSquare][
      clickedSquare.column
    ] = currentTeamsColor;
    indexOfSandwichedSquare++;
  });
  return boardState;
};
