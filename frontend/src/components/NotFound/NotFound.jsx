import React from "react";
import FailImg from "../../assets/images/fail.png";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div>
      <h1> Error 404!</h1>
      <h2> Вы что-то сломали. Поздравляю вас. Теперь опять все чинить...</h2>
      <div className={styles.imgBlock}>
        <a href="#">
          <img src={FailImg} />
        </a>
      </div>
    </div>
  );
};
