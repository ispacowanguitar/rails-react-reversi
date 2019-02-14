import React from "react";
import ReactDOM from "react-dom";
import Game from "packs/reversiApp/components/Game";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game />, document.getElementById("reversi-app"));
});
