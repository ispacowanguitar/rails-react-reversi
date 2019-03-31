import { flipSandwichedSquaresToRightOfClickedSquare } from "boardStateCalculator/squaresToRightOfClickedCalculator";

describe("flipSandwichedSquaresToRightOfClickedSquare", () => {
  describe("with one sandwiched square", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, null, "bl", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 3, column: 2 };
      const actual = flipSandwichedSquaresToRightOfClickedSquare(
        initialState,
        clickedSquare,
        "bl"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, "bl", "bl", "bl", null, null, null],
        [null, null, null, "bl", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with multiple sandwiched squares", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, "bl", "bl", "bl", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 4, column: 0 };
      const actual = flipSandwichedSquaresToRightOfClickedSquare(
        initialState,
        clickedSquare,
        "wh"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        ["wh", "wh", "wh", "wh", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with no sandwiched squares", () => {
    describe("when the current teams color goes to the edge", () => {
      it("does not update the board", () => {
        const initialState = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "wh", "wh", "wh", "wh", "wh"],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 4, column: 2 };
        const actual = flipSandwichedSquaresToRightOfClickedSquare(
          initialState,
          clickedSquare,
          "bl"
        );

        expect(actual).toEqual(initialState);
      });
    });
    describe("when the current teams color does not go to the edge", () => {
      it("does not update the board", () => {
        const initialState = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "bl", "bl", "bl", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 4, column: 2 };
        const actual = flipSandwichedSquaresToRightOfClickedSquare(
          initialState,
          clickedSquare,
          "wh"
        );

        expect(actual).toEqual(initialState);
      });
    });
  });
});
