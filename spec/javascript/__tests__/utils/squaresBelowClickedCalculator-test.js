import { flipSandwichedSquaresBelowClickedSquare } from "utils/squaresBelowClickedCalculator";

describe("flipSandwichedSquaresBelowClickedSquare", () => {
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

      const clickedSquare = { row: 2, column: 3 };
      const actual = flipSandwichedSquaresBelowClickedSquare(
        initialState,
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
  describe("with multiple sandwiched squares", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "black", null, null, null, null],
        [null, null, null, "black", "black", null, null, null],
        [null, null, "white", "white", "white", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 1, column: 3 };
      const actual = flipSandwichedSquaresBelowClickedSquare(
        initialState,
        clickedSquare,
        "white"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, "white", null, null, null, null],
        [null, null, null, "white", null, null, null, null],
        [null, null, null, "white", "black", null, null, null],
        [null, null, "white", "white", "white", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with no sandwiched squares", () => {
    describe("when the other teams color goes to the edge", () => {
      it("does not update the board", () => {
        const initialState = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "white", "white", null, null, null],
          [null, null, null, "white", null, null, null, null],
          [null, null, null, "white", null, null, null, null],
          [null, null, null, "white", null, null, null, null]
        ];

        const clickedSquare = { row: 2, column: 3 };
        const actual = flipSandwichedSquaresBelowClickedSquare(
          initialState,
          clickedSquare,
          "black"
        );

        expect(actual).toEqual(initialState);
      });
    });
    describe("when the other teams color does not go to the edge", () => {
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

        const clickedSquare = { row: 1, column: 3 };
        const actual = flipSandwichedSquaresBelowClickedSquare(
          initialState,
          clickedSquare,
          "white"
        );

        expect(actual).toEqual(initialState);
      });
    });
  });
});
