import { flipSandwichedSquaresAboveClickedSquare } from "boardStateCalculator/singleDirectionCalculators/straight/squaresAboveClickedCalculator";

describe("flipSandwichedSquaresAboveClickedSquare", () => {
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

      const clickedSquare = { row: 5, column: 4 };
      const actual = flipSandwichedSquaresAboveClickedSquare(
        initialState,
        clickedSquare,
        "bl"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, null, "bl", "bl", null, null, null],
        [null, null, null, null, "bl", null, null, null],
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
        [null, null, null, "bl", "wh", null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 7, column: 3 };
      const actual = flipSandwichedSquaresAboveClickedSquare(
        initialState,
        clickedSquare,
        "wh"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, null, "wh", "wh", null, null, null],
        [null, null, null, "wh", null, null, null, null],
        [null, null, null, "wh", null, null, null, null],
        [null, null, null, "wh", null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with no sandwiched squares", () => {
    describe("when the current teams color goes to the edge", () => {
      it("does not update the board", () => {
        const initialState = [
          [null, null, null, "bl", null, null, null, null],
          [null, null, null, "bl", null, null, null, null],
          [null, null, null, "bl", null, null, null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 5, column: 3 };
        const actual = flipSandwichedSquaresAboveClickedSquare(
          initialState,
          clickedSquare,
          "wh"
        );

        expect(actual).toEqual(initialState);
      });
    });
    describe("when the current teams color does not go to the edge", () => {
      it("does not update the board", () => {
        const initialState = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "bl", null, null, null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 5, column: 3 };
        const actual = flipSandwichedSquaresAboveClickedSquare(
          initialState,
          clickedSquare,
          "wh"
        );

        expect(actual).toEqual(initialState);
      });
    });
  });
});
