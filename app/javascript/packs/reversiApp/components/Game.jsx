import React from "react";
import Square from "components/Square";

const NUMBER_OF_SQUARES = 64;

class Game extends React.Component {
  render() {
    return (
      <>
        {[...Array(NUMBER_OF_SQUARES)].map((x, index) => {
          return <Square key={index} />;
        })}
      </>
    );
  }
}

export default Game;
