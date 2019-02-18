const INDEX_OF_FURTHEST_RIGHT_COLUMN = 7;

const flipSandwichedSquaresToRightOfClickedSquare = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  const clickedRow = boardState[clickedSquare.row];
  const otherTeamsColor = currentTeamsColor === "black" ? "white" : "black";

  let numberOfPossiblySandwichedSquares = 0;
  let indexOfPossiblySandwichedSquare = clickedSquare.column + 1;
  while (indexOfPossiblySandwichedSquare < 8) {
    const colorOfCurrent = clickedRow[indexOfPossiblySandwichedSquare];

    if (
      colorOfCurrent === otherTeamsColor &&
      indexOfPossiblySandwichedSquare !== INDEX_OF_FURTHEST_RIGHT_COLUMN
    ) {
      numberOfPossiblySandwichedSquares++;
    } else if (colorOfCurrent === currentTeamsColor) {
      break;
    } else if (
      indexOfPossiblySandwichedSquare === 7 ||
      colorOfCurrent === null
    ) {
      return boardState;
    }
    indexOfPossiblySandwichedSquare++;
  }
  const numberOfSandwichedSquares = numberOfPossiblySandwichedSquares;
  if (numberOfSandwichedSquares > 0) {
    boardState[clickedSquare.row][clickedSquare.column] = currentTeamsColor;
  }

  let indexOfSandwichedSquare = clickedSquare.column + 1;
  [...Array(numberOfSandwichedSquares)].forEach(() => {
    boardState[clickedSquare.row][indexOfSandwichedSquare] = currentTeamsColor;
    indexOfSandwichedSquare++;
  });
  return boardState;
};

export const calculateBoardStateAfterClick = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  return flipSandwichedSquaresToRightOfClickedSquare(
    boardState,
    clickedSquare,
    currentTeamsColor
  );
};
