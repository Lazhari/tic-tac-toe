import React from "react";

import Game from "./Game";
import styles from "./App.module.css";

const App = props => {
  return (
    <div className={styles.container}>
      <h1>Tic Tac Toe Game</h1>
      <Game />
    </div>
  );
};

export default App;
