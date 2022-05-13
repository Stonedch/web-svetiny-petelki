import React from 'react';
import styles from './Item.module.scss';

const Item = (props) => {
    const {url, title, image} = props;

    return (
        <a href={url} className={styles.item}>
            <div className={styles.container}>
                <h4 className={styles.title}>{title}</h4>
            </div>
            <img
                src={image}
                className={styles.image}
            />
        </a>
    );
}

export { Item };
