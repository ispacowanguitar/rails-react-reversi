import { flipSandwichedSquaresAboveClickedSquare } from "boardStateCalculator/squaresAboveClickedCalculator";

describe("flipSandwichedSquaresAboveClickedSquare", () => {
  describe("with one sandwiched square", () => {
    it("updates the board correctly", () => {
      const initialState = [
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
      const actual = flipSandwichedSquaresAboveClickedSquare(
        initialState,
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
  describe("with multiple sandwiched squares", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "white", "black", null, null, null],
        [null, null, null, "black", "white", null, null, null],
        [null, null, null, "black", null, null, null, null],
        [null, null, null, "black", null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 7, column: 3 };
      const actual = flipSandwichedSquaresAboveClickedSquare(
        initialState,
        clickedSquare,
        "white"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "white", "black", null, null, null],
        [null, null, null, "white", "white", null, null, null],
        [null, null, null, "white", null, null, null, null],
        [null, null, null, "white", null, null, null, null],
        [null, null, null, "white", null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with no sandwiched squares", () => {
    describe("when the current teams color goes to the edge", () => {
      it("does not update the board", () => {
        const initialState = [
          [null, null, null, "black", null, null, null, null],
          [null, null, null, "black", null, null, null, null],
          [null, null, null, "black", null, null, null, null],
          [null, null, null, "black", "black", null, null, null],
          [null, null, null, "black", "white", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 5, column: 3 };
        const actual = flipSandwichedSquaresAboveClickedSquare(
          initialState,
          clickedSquare,
          "white"
        );

        expect(actual).toEqual(initialState);
      });
    });
    describe("when the current teams color does not go to the edge", () => {
      it("does not update the board", () => {
        const initialState = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "black", null, null, null, null],
          [null, null, null, "black", "black", null, null, null],
          [null, null, null, "black", "white", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 5, column: 3 };
        const actual = flipSandwichedSquaresAboveClickedSquare(
          initialState,
          clickedSquare,
          "white"
        );

        expect(actual).toEqual(initialState);
      });
    });
  });
});
