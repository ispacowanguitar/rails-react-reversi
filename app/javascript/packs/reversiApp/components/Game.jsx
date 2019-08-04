import React from "react";
import Square from "components/Square";
import _ from "lodash";
import { connect } from "react-redux";
import { turn, turnAndSkip, undo, redo } from "redux/actions";
import { calculateBoardStateAfterClick } from "boardStateCalculator/handleClickedSquare";
import "assets/stylesheets/boardStyles.css";
import moveExists from "boardStateCalculator/moveExists";
import Confetti from "react-confetti";
import GameInfo from "./GameInfo";

const TURN_DISPLAY_COLORS = {
  wh: "white",
  bl: "black"
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
      currentTeamsColor: props.currentTeamsColor
    };
  }

  handleSquareClick = (rowIndex, colIndex) => {
    return e => {
      const clickedSquare = { row: rowIndex, column: colIndex };
      const currentBoard = this.props.board;
      const newBoardState = calculateBoardStateAfterClick(
        currentBoard.slice().map(row => row.slice()),
        clickedSquare,
        this.props.currentTeamsColor
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
        this.props.takeTurn(newBoardState);
      } else {
        this.props.takeTurnAndSkip(newBoardState);
      }
    };
  };

  score = () => {
    return this.props.board.reduce(
      (acc, row) => {
        const blackScore = row.filter(square => square === "bl").length;
        const whiteScore = row.filter(square => square === "wh").length;
        return { wh: acc.wh + whiteScore, bl: acc.bl + blackScore };
      },
      { wh: 0, bl: 0 }
    );
  };

  isGameOver = () => {
    return this.score().wh + this.score().bl === 64;
  };

  render() {
    return (
      <>
        {this.isGameOver() && <Confetti />}
        <div className="board">
          {this.props.board.map((rowState, rowIndex) => {
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
        <GameInfo
          currentTeamsColor={this.props.currentTeamsColor}
          score={{ bl: this.score().bl, wh: this.score().wh }}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.current,
    currentTeamsColor: state.currentTeamsColor,
    score: state.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    takeTurn: board => dispatch(turn(board)),
    takeTurnAndSkip: board => dispatch(turnAndSkip(board))
  };
};

const ConnectedGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
export default ConnectedGame;
