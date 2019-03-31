import React from "react";
import Square from "components/Square";
import _ from "lodash";
import { calculateBoardStateAfterClick } from "boardStateCalculator/handleClickedSquare";
import "assets/stylesheets/boardStyles.scss";

const TURN_DISPLAY_COLORS = {
  wh: "white",
  bl: "black"
};

class Game extends React.Component {
  constructor() {
    super();
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
    this.state = { board: INITIAL_BOARD_STATE, currentTeamsColor: "bl" };
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
        currentTeamsColor: this.state.currentTeamsColor === "bl" ? "wh" : "bl"
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
        <span>Turn: {TURN_DISPLAY_COLORS[this.state.currentTeamsColor]}</span>
      </div>
    );
  }
}

export default Game;
