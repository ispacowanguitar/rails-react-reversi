import React from "react";
import blackChip from "assets/images/black-othello-piece.png";
import whiteChip from "assets/images/white-othello-piece.png";
import "assets/stylesheets/squareStyles";

const getChipImageFromProps = piece => {
  switch (piece) {
    case "white":
      return whiteChip;
    case "black":
      return blackChip;
    default:
      return false;
  }
};

const Square = ({ chip, onSquareClick }) => {
  const chipImage = getChipImageFromProps(chip);
  return (
    <div onClick={onSquareClick} className="square">
      {chip && <img src={chipImage} />}
    </div>
  );
};

export default Square;
