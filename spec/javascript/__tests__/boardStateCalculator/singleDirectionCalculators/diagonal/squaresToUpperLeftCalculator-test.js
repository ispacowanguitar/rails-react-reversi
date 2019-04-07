import { flipSandwichedSquaresToUpperLeftOfClicked } from "boardStateCalculator/singleDirectionCalculators/diagonal/squaresToUpperLeftCalculator";

describe("flipSandwichedSquaresToUpperLeftOfClicked", () => {
  describe("with one sandwiched square", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, "bl", "bl", null, null, null],
        [null, null, "wh", "wh", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 5, column: 5 };
      const actual = flipSandwichedSquaresToUpperLeftOfClicked(
        initialState,
        clickedSquare,
        "bl"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, "bl", "bl", null, null, null],
        [null, null, "wh", "wh", "bl", null, null, null],
        [null, null, null, null, null, "bl", null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with mulitple sandwiched squares", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, "wh", null, null, null, null, null, null],
        [null, null, "bl", null, null, null, null, null],
        [null, null, null, "bl", "bl", null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 5, column: 5 };
      const actual = flipSandwichedSquaresToUpperLeftOfClicked(
        initialState,
        clickedSquare,
        "wh"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, "wh", null, null, null, null, null, null],
        [null, null, "wh", null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, null, "wh", "wh", null, null, null],
        [null, null, null, null, null, "wh", null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with no sandwiched squares", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, "wh", "wh", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 4, column: 5 };
      const actual = flipSandwichedSquaresToUpperLeftOfClicked(
        initialState,
        clickedSquare,
        "bl"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, "wh", "wh", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("when the other teams color goes to the edge", () => {
    it("doesnt break", () => {
      const initialState = [
        [null, null, "bl", null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 1, column: 3 };
      const actual = flipSandwichedSquaresToUpperLeftOfClicked(
        initialState,
        clickedSquare,
        "wh"
      );

      const expected = [
        [null, null, "bl", null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
});
