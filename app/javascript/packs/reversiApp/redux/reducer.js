import { TURN, TURN_AND_SKIP, UNDO, REDO } from "./actions";

const initialBoard = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, "wh", "bl", null, null, null],
  [null, null, null, "bl", "wh", null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];

const initialState = {
  board: {
    previous: [],
    current: initialBoard,
    future: []
  },
  currentTeamsColor: "bl",
  score: { bl: 2, wh: 2 }
};

const toggleTurn = currentTeamsColor => {
  return currentTeamsColor === "bl" ? "wh" : "bl";
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN:
      return Object.assign({}, state, {
        board: {
          previous: state.board.previous.concat([state.board.current]),
          current: action.board,
          future: []
        },
        currentTeamsColor: toggleTurn(state.currentTeamsColor)
      });
    case TURN_AND_SKIP:
      return Object.assign({}, state, {
        board: {
          previous: state.board.previous.concat([state.board.current]),
          current: action.board,
          future: []
        },
        currentTeamsColor: state.currentTeamsColor
      });
    case UNDO:
      if (state.board.previous.length === 0) {
        return state;
      }
      return Object.assign({}, state, {
        board: {
          previous: state.board.previous.slice(0, -1),
          current: state.board.previous.slice(-1)[0],
          future: state.board.future.concat(state.board.current)
        },
        currentTeamsColor: toggleTurn(state.currentTeamsColor)
      });
    case REDO:
      return Object.assign({}, state, {
        board: {
          previous: state.board.previous.concat(state.board.current),
          current: state.board.future.slice(-1),
          future: state.board.future.slice(0, -1)
        },
        currentTeamsColor: toggleTurn(state.currentTeamsColor)
      });
    default:
      return state;
  }
};

export default gameReducer;
