import styles from './Footer.module.scss';
import facebook from '../../assets/images/Facebook.svg';
import instag from '../../assets/images/Instagram.svg';
import whatsapp from '../../assets/images/WhatsApp.svg';

import { API_URL } from '../../http';
import { Link } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';

const Footer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'settings/navbar/')
            .then(response => response.json())
            .then(response => setData(response.results));
    }, []);

    const footer = data ? (
        <>
            {data.map((item)=> <Link to={item.url}>{item.name}</Link>)}
        </>
    ) : null;

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
                {footer}
            </div>
            <a href='#' className={styles.сopyright}>©2022 Svetenpetelki. All rights reserved</a>
        </div>
    </div>
  );
};

export { Footer };

