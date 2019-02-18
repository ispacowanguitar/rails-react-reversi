import { calculateBoardStateAfterClick } from "utils/boardStateCalculator";

describe("calculateBoardStateAfterClick", () => {
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
  describe("when a valid square is clicked", () => {
    describe("when the sandwiched squares are to the right", () => {
      it("", () => {
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
  });
});
