import React from "react";

const GameInfo = ({ currentTeamsColor, score = { bl, wh } }) => {
  return (
    <div className="game-info">
      <h3>
        {currentTeamsColor === "bl" && String.fromCharCode(9654)} Black:{" "}
        {score.bl} {currentTeamsColor === "bl" && String.fromCharCode(9664)}
      </h3>
      <h3>
        {currentTeamsColor === "wh" && String.fromCharCode(9654)} White:{" "}
        {score.wh} {currentTeamsColor === "wh" && String.fromCharCode(9664)}{" "}
      </h3>
    </div>
  );
};

export default GameInfo;
