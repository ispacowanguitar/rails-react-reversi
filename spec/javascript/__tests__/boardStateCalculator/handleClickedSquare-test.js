import { calculateBoardStateAfterClick } from "boardStateCalculator/handleClickedSquare";

describe("calculateBoardStateAfterClick", () => {
  describe("when a valid square is clicked", () => {
    describe("when the sandwiched squares are to the right", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
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

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
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
    describe("when the sandwiched squares are to the left", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "wh", "bl", null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 4, column: 5 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "bl"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "wh", "bl", null, null, null],
          [null, null, null, "bl", "bl", "bl", null, null],
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
            [null, null, null, "wh", "bl", null, null, null],
            [null, null, null, "bl", "wh", "wh", "wh", null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ];

          const clickedSquare = { row: 4, column: 7 };
          const actual = calculateBoardStateAfterClick(
            initialState,
            clickedSquare,
            "bl"
          );

          const expected = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, "wh", "bl", null, null, null],
            [null, null, null, "bl", "bl", "bl", "bl", "bl"],
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
          [null, null, null, "wh", "bl", null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 5, column: 4 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
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
    describe("when the sandwiched squares are below", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "wh", "bl", null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 2, column: 3 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "bl"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "bl", null, null, null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
    describe("when the sandwiched squares are to the upper right", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, "wh", null, null, null],
          [null, null, "bl", "bl", "wh", null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 5, column: 2 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "wh"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, "wh", null, null, null],
          [null, null, "bl", "bl", "wh", null, null, null],
          [null, null, null, "wh", "wh", null, null, null],
          [null, null, "wh", null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
    describe("when the sandwiched squares are to the upper left", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
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

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
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
    describe("when the sandwiched squares are to the lower right", () => {
      it("updates the board correctly", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, "wh", null, null, null],
          [null, null, null, "wh", "wh", null, null, null],
          [null, null, null, "bl", "bl", "bl", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 2, column: 3 };
        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "bl"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "bl", "wh", null, null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, "bl", "bl", "bl", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
    describe("when the sandwiched squares are to the lower left", () => {
      it("updates the board correctly", () => {
        const initialState = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, "wh", "wh", "wh", null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, null, "bl", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];

        const clickedSquare = { row: 2, column: 5 };
        const actual = calculateBoardStateAfterClick(
          initialState,
          clickedSquare,
          "bl"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, "bl", null, null],
          [null, null, null, "wh", "bl", "wh", null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, null, "bl", null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
  });
  describe("when an invalid square is clicked", () => {
    describe("when there is already a piece in that square", () => {
      it("does not change the board", () => {
        const INITIAL_BOARD_STATE = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, "wh", null, null, null],
          [null, "wh", "wh", "wh", "wh", null, null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, null, null, "bl", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        const clickedSquare = { row: 5, column: 5 };

        const actual = calculateBoardStateAfterClick(
          INITIAL_BOARD_STATE,
          clickedSquare,
          "wh"
        );

        const expected = [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, "wh", null, null, null],
          [null, "wh", "wh", "wh", "wh", null, null, null],
          [null, null, null, "bl", "bl", null, null, null],
          [null, null, null, null, null, "bl", null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ];
        expect(actual).toEqual(expected);
      });
    });
  });
  describe("when sydney breaks the game", () => {
    it("doesnt break", () => {
      const initialBoardState = [
        [null, null, null, "bl", "wh", "bl", null, null],
        [null, null, null, "bl", "wh", "bl", null, null],
        [null, null, null, "bl", "wh", "bl", null, null],
        ["bl", "bl", "bl", "bl", "bl", "wh", null, null],
        [null, null, "bl", "bl", "bl", "wh", "wh", "wh"],
        [null, "bl", "bl", "bl", "bl", "wh", "wh", "wh"],
        [null, null, null, null, "bl", "wh", null, "wh"],
        [null, null, null, null, null, "wh", null, null]
      ];

      const clickedSquare = { row: 3, column: 6 };
      const actual = calculateBoardStateAfterClick(
        initialBoardState,
        clickedSquare,
        "bl"
      );

      const expected = [
        [null, null, null, "bl", "wh", "bl", null, null],
        [null, null, null, "bl", "wh", "bl", null, null],
        [null, null, null, "bl", "wh", "bl", null, null],
        ["bl", "bl", "bl", "bl", "bl", "bl", "bl", null],
        [null, null, "bl", "bl", "bl", "bl", "wh", "wh"],
        [null, "bl", "bl", "bl", "bl", "wh", "wh", "wh"],
        [null, null, null, null, "bl", "wh", null, "wh"],
        [null, null, null, null, null, "wh", null, null]
      ];
      expect(actual).toEqual(expected);
    });
  });
});
