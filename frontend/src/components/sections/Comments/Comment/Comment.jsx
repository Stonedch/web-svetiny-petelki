import React from 'react';
import styles from './Comment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Comment = (props) => {
    const { mounth, day, title, username, children } = props;

    return (
        <div className={styles.comment}>
            <div className={styles.side}>
                <span className={styles.mounth}>{mounth}</span>
                <span className={styles.day}>{day}</span>
            </div>
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                <p className={styles.message}>{children}</p>
                <div className={styles.user}>
                    <FontAwesomeIcon icon={faUser} className={styles.avatar} />
                    <span className={styles.username}>{username}</span>
                </div>
            </div>
        </div>
    );
};

export { Comment };
