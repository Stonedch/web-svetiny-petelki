import React from 'react';
import styles from './Who.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Who = () => {
    return (
        <div className={styles.who}>
            <div className={styles.avatar}>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles.body}>
                <h2 className={styles.title}>Lorem Ipsum</h2>
                <div className={styles.line}></div>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне.
                </p>
            </div>
        </div>
    );
};

export { Who };
