import React from "react";

import styles from "./Square.module.css";

const Square = ({ onClick, value }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
