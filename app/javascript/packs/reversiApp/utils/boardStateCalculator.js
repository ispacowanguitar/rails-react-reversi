import { flipSandwichedSquaresAboveClickedSquare } from "./squaresAboveClickedCalculator";
import { flipSandwichedSquaresToRightOfClickedSquare } from "./squaresToRightOfClickedCalculator";
import { flipSandwichedSquaresToLeftOfClickedSquare } from "./squaresToLeftOfClickedCalculator";
import { flipSandwichedSquaresBelowClickedSquare } from "./squaresBelowClickedCalculator";

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
  const withUpdatedBelowSquares = flipSandwichedSquaresBelowClickedSquare(
    withUpdatedRightSquares,
    clickedSquare,
    currentTeamsColor
  );
  const withUpdatedAboveSquares = flipSandwichedSquaresAboveClickedSquare(
    withUpdatedBelowSquares,
    clickedSquare,
    currentTeamsColor
  );

  return withUpdatedAboveSquares;
};
