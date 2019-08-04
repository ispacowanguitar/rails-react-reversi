import React from "react";
import ReactDOM from "react-dom";
import Game from "components/Game";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import gameReducer from "redux/reducer";
import { Provider } from "react-redux";

const store = createStore(
  gameReducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById("reversi-app")
  );
});
