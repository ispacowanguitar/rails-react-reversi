import { flipSandwichedSquaresToLeftOfClickedSquare } from "utils/squaresToLeftOfClickedCalculator";

describe("flipSandwichedSquaresToLeftOfClickedSquare", () => {
  describe("with one sandwiched square", () => {
    it.only("updates the board correctly", () => {
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

      const clickedSquare = { row: 3, column: 5 };

      const actual = flipSandwichedSquaresToLeftOfClickedSquare(
        initialState,
        clickedSquare,
        "white"
      );

      const expected = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, "white", "white", "white", null, null],
        [null, null, null, "black", "white", null, null, null],
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
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "black", "white", "white", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 4, column: 6 };
        const actual = flipSandwichedSquaresToLeftOfClickedSquare(
          initialState,
          clickedSquare,
          "white"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "white", "black", null, null, null],
          [null, null, null, "black", "black", "black", "black", null],
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
            ["black", "black", "black", "black", "black", null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ];

          const clickedSquare = { row: 3, column: 5 };
          const actual = flipSandwichedSquaresToLeftOfClickedSquare(
            initialState,
            clickedSquare,
            "white"
          );

          expect(actual).toEqual(expected);
        });
      });
      describe("when the current teams color does not go to the edge", () => {
        it("does not updated the board", () => {
          const initialState = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, "black", "black", "black", "black", null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ];

          const clickedSquare = { row: 3, column: 5 };
          const actual = flipSandwichedSquaresToLeftOfClickedSquare(
            initialState,
            clickedSquare,
            "white"
          );

          expect(actual).toEqual(expected);
        });
      });
    });
  });
});
