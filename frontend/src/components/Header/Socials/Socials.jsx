import React from 'react';
import styles from './Socials.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Socials = (props) => {
    const { className } = props;

    return (
        <div className={`${styles.socials} ${className}`}>
            <a className={styles.item} href='#'>
                <FontAwesomeIcon icon={faVk} />
            </a>
            <a className={styles.item} href='#'>
                <FontAwesomeIcon icon={faTelegram} />
            </a>
        </div>
    );
};

export { Socials };
