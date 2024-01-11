import React from "react";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({btnClickHua}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((item) => (
        <button key={item} className={styles.btn} onClick={(e)=>{btnClickHua(e,item)}}>{item}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
