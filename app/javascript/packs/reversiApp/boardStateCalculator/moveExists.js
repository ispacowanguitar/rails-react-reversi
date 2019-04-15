import { calculateBoardStateAfterClick } from "boardStateCalculator/handleClickedSquare";
import _ from "lodash";

export default (state, color) => {
  let row = 0;
  while (row <= 7) {
    let column = 0;
    while (column <= 7) {
      if (
        !_.isEqual(
          calculateBoardStateAfterClick(
            state.slice().map(row => row.slice()),
            { row, column },
            color
          ),
          state
        )
      ) {
        return true;
      }
      column++;
    }
    row++;
  }
  return false;
};
