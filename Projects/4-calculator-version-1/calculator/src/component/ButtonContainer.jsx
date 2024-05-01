/* eslint-disable react/jsx-key */
import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
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
    <div className={styles.ButtonContainer}>
      {buttonNames.map((buttonNames) => (
        <button className={styles.button}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
