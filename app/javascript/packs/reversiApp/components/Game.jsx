import React from "react";
import Square from "components/Square";
import _ from "lodash";
import { calculateBoardStateAfterClick } from "utils/boardStateCalculator";

class Game extends React.Component {
  constructor() {
    super();
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
    this.state = { board: INITIAL_BOARD_STATE, currentTeamsColor: "black" };
  }

  handleSquareClick = (rowIndex, colIndex) => {
    return e => {
      const clickedSquare = { row: rowIndex, column: colIndex };
      const currentBoard = this.state.board;
      const newBoardState = calculateBoardStateAfterClick(
        currentBoard.slice().map(row => row.slice()),
        clickedSquare,
        this.state.currentTeamsColor
      );
      if (_.isEqual(currentBoard, newBoardState)) {
        return;
      }
      this.setState({
        board: newBoardState,
        currentTeamsColor:
          this.state.currentTeamsColor === "black" ? "white" : "black"
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
