import { flipSandwichedSquaresAboveClickedSquare } from "./singleDirectionCalculators/straight/squaresAboveClickedCalculator";
import { flipSandwichedSquaresToRightOfClickedSquare } from "./singleDirectionCalculators/straight/squaresToRightOfClickedCalculator";
import { flipSandwichedSquaresToLeftOfClickedSquare } from "./singleDirectionCalculators/straight/squaresToLeftOfClickedCalculator";
import { flipSandwichedSquaresBelowClickedSquare } from "./singleDirectionCalculators/straight/squaresBelowClickedCalculator";
import { flipSandwichedSquaresToUpperRightOfClicked } from "./singleDirectionCalculators/diagonal/squaresToUpperRightCalculator";

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
  const withUpdatedUpperRightSquares = flipSandwichedSquaresToUpperRightOfClicked(
    withUpdatedAboveSquares,
    clickedSquare,
    currentTeamsColor
  );

  return withUpdatedUpperRightSquares;
};
