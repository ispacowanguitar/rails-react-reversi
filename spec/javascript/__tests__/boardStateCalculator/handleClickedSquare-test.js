import { calculateBoardStateAfterClick } from "boardStateCalculator/handleClickedSquare";

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
      describe("when an edge piece is captured", () => {
        it("updates the board correctly", () => {
          const initialState = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, "white", "black", null, null, null],
            [null, null, null, "black", "white", "white", "white", null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ];

          const clickedSquare = { row: 4, column: 7 };
          const actual = calculateBoardStateAfterClick(
            initialState,
            clickedSquare,
            "black"
          );

          const expected = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, "white", "black", null, null, null],
            [null, null, null, "black", "black", "black", "black", "black"],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ];
          expect(actual).toEqual(expected);
        });
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
    describe("when the sandwiched squares are below", () => {
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
        const clickedSquare = { row: 2, column: 3 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "black"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "black", null, null, null, null],
          [null, null, null, "black", "black", null, null, null],
          [null, null, null, "black", "white", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
  });
});
