import { flipSandwichedSquaresToLowerRightOfClicked } from "boardStateCalculator/singleDirectionCalculators/diagonal/squaresToLowerRightCalculator";

describe("flipSandwichedSquaresToLowerRightOfClicked", () => {
  describe("with one sandwiched square", () => {
    it("updates the board correctly", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, "wh", null, null, null, null, null, null],
        [null, null, "bl", null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 0, column: 0 };
      const actual = flipSandwichedSquaresToLowerRightOfClicked(
        initialState,
        clickedSquare,
        "bl"
      );

      const expected = [
        ["bl", null, null, null, null, null, null, null],
        [null, "bl", null, null, null, null, null, null],
        [null, null, "bl", null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
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
        [null, null, null, null, null, null, null, null],
        [null, null, "wh", null, null, null, null, null],
        [null, null, null, "wh", null, null, null, null],
        [null, null, null, null, "wh", null, null, null],
        [null, null, null, null, null, "bl", null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 1, column: 1 };
      const actual = flipSandwichedSquaresToLowerRightOfClicked(
        initialState,
        clickedSquare,
        "bl"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, "bl", null, null, null, null, null, null],
        [null, null, "bl", null, null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, null, "bl", null, null, null],
        [null, null, null, null, null, "bl", null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("with no sandwiched squares", () => {
    it("does not update the board", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, "wh", "wh", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 2, column: 2 };
      const actual = flipSandwichedSquaresToLowerRightOfClicked(
        initialState,
        clickedSquare,
        "bl"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "bl", null, null, null],
        [null, null, "wh", "wh", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
  describe("when the other teams pieces go to the edge", () => {
    it("does not error", () => {
      const initialState = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, null, "bl", null, null, null],
        [null, null, null, null, null, "bl", null, null],
        [null, null, null, null, null, null, "bl", null],
        [null, null, null, null, null, null, null, "bl"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];

      const clickedSquare = { row: 0, column: 2 };
      const actual = flipSandwichedSquaresToLowerRightOfClicked(
        initialState,
        clickedSquare,
        "wh"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, "bl", null, null, null, null],
        [null, null, null, null, "bl", null, null, null],
        [null, null, null, null, null, "bl", null, null],
        [null, null, null, null, null, null, "bl", null],
        [null, null, null, null, null, null, null, "bl"],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
});
