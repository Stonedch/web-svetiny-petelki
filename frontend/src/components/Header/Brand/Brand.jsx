import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Brand.module.scss';
import logotype from 'assets/images/logo.svg';

const Brand = () => {
    return (
        <Link className={styles.brand} to='/'>
            <div className={styles.logotype}>
                <img src={logotype} />
            </div>
            <span className={styles.title}>Светины Петельки</span>
        </Link>
    );
};

export { Brand };
