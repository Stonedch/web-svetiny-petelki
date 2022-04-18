import React from 'react';
import styles from './Comment.module.scss';

const Comment = (props) => {
    const { author, date, children } = props;

    return (
        <div className={styles.comment}>
            <div className={styles.top}>
                <h3 className={styles.author}>{author}</h3>
            </div>
            <div className={styles.body}>
                <p className={styles.message}>{children}</p>
            </div>
            <div className={styles.bottom}>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
    );
};

export { Comment };

