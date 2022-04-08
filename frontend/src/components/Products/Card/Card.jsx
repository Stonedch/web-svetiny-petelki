import React, { useState, useContext } from 'react';
import styles from './Card.module.scss';

const Card = () => {

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="" />
            </div>
            <h3 className={styles.title}>This is product name</h3>
            <p className={styles.body}>Lorem ipsum dolor sit amet, consectetur...</p>
            <div className={styles.bottom}>
                <div className={styles.price}>2.000 р.</div>
            </div>
        </div>
    );
}

export { Card };

