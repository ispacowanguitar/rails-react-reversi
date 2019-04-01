import { flipSandwichedSquaresToLeftOfClickedSquare } from "boardStateCalculator/singleDirectionCalculators/straight/squaresToLeftOfClickedCalculator";

describe("flipSandwichedSquaresToLeftOfClickedSquare", () => {
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

      const clickedSquare = { row: 3, column: 5 };

      const actual = flipSandwichedSquaresToLeftOfClickedSquare(
        initialState,
        clickedSquare,
        "wh"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "wh", "wh", "wh", null, null],
        [null, null, null, "bl", "wh", null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ];
      expect(actual).toEqual(expected);
    });

    describe("with multiple sandwiched squares", () => {
      it("updates the board correctly", () => {
        const initialState = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "wh", "bl", null, null, null],
          [null, null, null, "bl", "wh", "wh", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 4, column: 6 };
        const actual = flipSandwichedSquaresToLeftOfClickedSquare(
          initialState,
          clickedSquare,
          "bl"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "wh", "bl", null, null, null],
          [null, null, null, "bl", "bl", "bl", "bl", null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });

    describe("with no sandwiched squares", () => {
      describe("when the current teams color goes to the edge", () => {
        it("does not updated the board", () => {
          const initialState = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ["bl", "bl", "bl", "bl", "bl", null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ];

          const clickedSquare = { row: 3, column: 5 };
          const actual = flipSandwichedSquaresToLeftOfClickedSquare(
            initialState,
            clickedSquare,
            "wh"
          );

          expect(actual).toEqual(initialState);
        });
      });
      describe("when the current teams color does not go to the edge", () => {
        it("does not updated the board", () => {
          const initialState = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, "bl", "bl", "bl", "bl", null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ];

          const clickedSquare = { row: 3, column: 5 };
          const actual = flipSandwichedSquaresToLeftOfClickedSquare(
            initialState,
            clickedSquare,
            "wh"
          );

          expect(actual).toEqual(initialState);
        });
      });
    });
  });
});
