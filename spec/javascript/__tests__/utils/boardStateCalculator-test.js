import { calculateBoardStateAfterClick } from "utils/boardStateCalculator";

describe("calculateBoardStateAfterClick", () => {
  describe("when a valid square is clicked", () => {
    describe("when the sandwiched squares are to the right", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "black", "white", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 3, column: 2 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "black"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, "black", "black", "black", null, null, null],
          [null, null, null, "black", "white", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
    describe("when the sandwiched squares are to the left", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "black", "white", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 4, column: 5 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "black"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "black", "black", "black", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
    describe("when the sandwiched squares are above", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "black", "white", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 5, column: 4 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "black"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "black", "black", null, null, null],
          [null, null, null, null, "black", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
  });
});
