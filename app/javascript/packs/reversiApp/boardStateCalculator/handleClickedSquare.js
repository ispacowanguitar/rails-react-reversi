import { flipSandwichedSquaresAboveClickedSquare } from "./singleDirectionCalculators/straight/squaresAboveClickedCalculator";
import { flipSandwichedSquaresToRightOfClickedSquare } from "./singleDirectionCalculators/straight/squaresToRightOfClickedCalculator";
import { flipSandwichedSquaresToLeftOfClickedSquare } from "./singleDirectionCalculators/straight/squaresToLeftOfClickedCalculator";
import { flipSandwichedSquaresBelowClickedSquare } from "./singleDirectionCalculators/straight/squaresBelowClickedCalculator";
import { flipSandwichedSquaresToUpperRightOfClicked } from "./singleDirectionCalculators/diagonal/squaresToUpperRightCalculator";
import { flipSandwichedSquaresToUpperLeftOfClicked } from "./singleDirectionCalculators/diagonal/squaresToUpperLeftCalculator";

export const calculateBoardStateAfterClick = (
  boardState,
  clickedSquare,
  currentTeamsColor
) => {
  if (boardState[clickedSquare.row][clickedSquare.column] != null) {
    return boardState;
  }
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
  const withUpdatedUpperLeftSquares = flipSandwichedSquaresToUpperLeftOfClicked(
    withUpdatedUpperRightSquares,
    clickedSquare,
    currentTeamsColor
  );

  return withUpdatedUpperLeftSquares;
};
