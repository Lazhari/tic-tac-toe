import React from "react";

import Game from "./Game";
import "./App.css";

const App = props => {
  return (
    <div className="container">
      <h1>Tic Tac Toe Game</h1>
      <Game />
    </div>
  );
};

export default App;
