import styles from './Footer.module.scss';
import React from 'react';
import facebook from '../../assets/images/Facebook.svg';
import instag from '../../assets/images/Instagram.svg';
import whatsapp from '../../assets/images/WhatsApp.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.massageBox}>
                <a href='#'><img src={facebook} /></a>
                <a href='#'><img src={instag} /></a>
                <a href='#'><img src={whatsapp} /></a>
            </div>
            <div className={styles.lineBox}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.menu}>
                <a href='/'>Главная</a>
                <a href='#'>Наборы</a>
                <a href='#'>Именные игрушки</a>
                <a href='#'>Контакты</a>
            </div>
            <a href='#' className={styles.сopyright}>©2022 Svetenpetelki. All rights reserved</a>
        </div>
    </div>
  );
};

export { Footer };

