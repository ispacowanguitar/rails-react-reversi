import React from "react";
import Square from "components/Square";
import { calculateBoardStateAfterClick } from "utils/boardStateCalculator";

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
    this.state = { board: INITIAL_BOARD_STATE, currentTeamsColor: "black" };
  }

  handleSquareClick = (rowIndex, colIndex) => {
    return e => {
      const clickedSquare = { row: rowIndex, column: colIndex };
      this.setState({
        board: calculateBoardStateAfterClick(
          this.state.board,
          clickedSquare,
          this.state.currentTeamsColor
        ),
        currentTeamsColor: "white"
      });
    };
  };

  render() {
    return (
      <div className="board">
        {this.state.board.map((rowState, rowIndex) => {
          return rowState.map((squareState, colIndex) => {
            return (
              <Square
                onSquareClick={this.handleSquareClick(rowIndex, colIndex)}
                chip={squareState}
                key={`${rowIndex}-${colIndex}`}
              />
            );
          });
        })}
      </div>
    );
  }
}

export default Game;
