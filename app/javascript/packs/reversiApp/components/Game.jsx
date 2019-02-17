import React from "react";
import Square from "components/Square";
const NUMBER_OF_SQUARES = 8;
const NUMBER_OF_ROWS = 8;
const INITIAL_BOARD_STATE = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, "white", "black", null, null, null],
  [null, null, null, "black", "white", null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];

class Game extends React.Component {
  constructor() {
    super();
    this.state = { board: INITIAL_BOARD_STATE };
  }
  render() {
    return (
      <div className="board">
        {this.state.board.map((row, i) => {
          return row.map((squareState, j) => {
            return <Square chip={squareState} key={`${i}-${j}`} />;
          });
        })}
      </div>
    );
  }
}

export default Game;
