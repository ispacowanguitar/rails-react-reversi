import { flipSandwichedSquaresAboveClickedSquare } from "./singleDirectionCalculators/squaresAboveClickedCalculator";
import { flipSandwichedSquaresToRightOfClickedSquare } from "./singleDirectionCalculators/squaresToRightOfClickedCalculator";
import { flipSandwichedSquaresToLeftOfClickedSquare } from "./singleDirectionCalculators/squaresToLeftOfClickedCalculator";
import { flipSandwichedSquaresBelowClickedSquare } from "./singleDirectionCalculators/squaresBelowClickedCalculator";

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
