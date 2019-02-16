import React from "react";
import Square from "components/Square";
const NUMBER_OF_SQUARES = 8;
const NUMBER_OF_ROWS = 8;
class Game extends React.Component {
  render() {
    return (
      <>
        {[...Array(NUMBER_OF_SQUARES)].map((x, row) => {
          return [...Array(NUMBER_OF_ROWS)].map((x, column) => {
            return <Square key={`${row}-${column}`} />;
          });
        })}
      </>
    );
  }
}

export default Game;
