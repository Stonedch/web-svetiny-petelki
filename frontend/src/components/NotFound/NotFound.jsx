import React from 'react';
import FailImg from 'assets/images/fail.png';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={[styles.notfound, styles.content, styles.screen].join(' ')}>
      <h2>Ошибка 404!</h2>
      <h3>Вы что-то сломали. Поздравляю вас. Теперь опять все чинить...</h3>
      <div className={styles.image}>
        <img src={FailImg} />
      </div>
    </div>
  );
};

