import { flipSandwichedSquaresAboveClickedSquare } from "./squaresAboveClickedCalculator";
import { flipSandwichedSquaresToRightOfClickedSquare } from "./squaresToRightOfClickedCalculator";
import { flipSandwichedSquaresToLeftOfClickedSquare } from "./squaresToLeftOfClickedCalculator";

export const calculateBoardStateAfterClick = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  const withUpdatedLeftSquares = flipSandwichedSquaresToLeftOfClickedSquare(
    boardState,
    clickedSquare,
    currentTeamsColor
  );
  const withUpdatedRightSquares = flipSandwichedSquaresToRightOfClickedSquare(
    withUpdatedLeftSquares,
    clickedSquare,
    currentTeamsColor
  );
  return flipSandwichedSquaresAboveClickedSquare(
    withUpdatedRightSquares,
    clickedSquare,
    currentTeamsColor
  );
};
