import React from "react";
import Square from "components/Square";
import _ from "lodash";
import { calculateBoardStateAfterClick } from "boardStateCalculator/handleClickedSquare";
import "assets/stylesheets/boardStyles.css";
import moveExists from "boardStateCalculator/moveExists";
import Confetti from "react-confetti";

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
    this.state = {
      board: INITIAL_BOARD_STATE,
      currentTeamsColor: "bl",
      score: { bl: 2, wh: 2 }
    };
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
      const nextTeamsColor =
        this.state.currentTeamsColor === "bl" ? "wh" : "bl";
      if (
        moveExists(
          newBoardState.slice().map(row => row.slice()),
          nextTeamsColor
        )
      ) {
        this.setState({
          board: newBoardState,
          currentTeamsColor: nextTeamsColor
        });
      } else {
        this.setState({
          board: newBoardState,
          currentTeamsColor: this.state.currentTeamsColor
        });
      }
    };
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.board === this.state.board) {
      return;
    }
    const score = this.state.board.reduce(
      (acc, row) => {
        const blackScore = row.filter(square => square === "bl").length;
        const whiteScore = row.filter(square => square === "wh").length;
        return { wh: acc.wh + whiteScore, bl: acc.bl + blackScore };
      },
      { wh: 0, bl: 0 }
    );
    this.setState(prevState => {
      return { ...prevState, score };
    });
  };

  isGameOver = () => {
    return this.state.score.wh + this.state.score.bl === 64;
  };

  render() {
    return (
      <>
        {this.isGameOver() && <Confetti />}
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
        <div className="game-info">
          <h3>
            {this.state.currentTeamsColor === "bl" && String.fromCharCode(9654)}{" "}
            Black: {this.state.score.bl}{" "}
            {this.state.currentTeamsColor === "bl" && String.fromCharCode(9664)}
          </h3>
          <h3>
            {this.state.currentTeamsColor === "wh" && String.fromCharCode(9654)}{" "}
            White: {this.state.score.wh}{" "}
            {this.state.currentTeamsColor === "wh" && String.fromCharCode(9664)}
          </h3>
        </div>
      </>
    );
  }
}

export default Game;
