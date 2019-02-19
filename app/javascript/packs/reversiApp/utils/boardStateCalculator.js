import { flipSandwichedSquaresAboveClickedSquare } from "./squaresAboveClickedCalculator";
import { flipSandwichedSquaresToRightOfClickedSquare } from "./squaresToRightOfClickedCalculator";

export const calculateBoardStateAfterClick = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  const withUpdatedRightSquares = flipSandwichedSquaresToRightOfClickedSquare(
    boardState,
    clickedSquare,
    currentTeamsColor
  );
  return flipSandwichedSquaresAboveClickedSquare(
    withUpdatedRightSquares,
    clickedSquare,
    currentTeamsColor
  );
};
