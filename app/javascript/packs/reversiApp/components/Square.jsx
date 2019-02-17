import React from "react";
import blackChip from "assets/images/black-othello-piece.png";
import whiteChip from "assets/images/white-othello-piece.png";

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

const Square = ({ chip }) => {
  const chipImage = getChipImageFromProps(chip);
  return <div className="square">{chip && <img src={chipImage} />}</div>;
};

export default Square;
