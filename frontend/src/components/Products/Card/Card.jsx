import React, { useState, useContext } from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    const {title, price, picture, children} = props;

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={picture} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            {children ? (
                <p className={styles.body}>{children}</p>
            ) : null}
            <div className={styles.bottom}>
                <div className={styles.price}>{price} р.</div>
            </div>
        </div>
    );
}

export { Card };

