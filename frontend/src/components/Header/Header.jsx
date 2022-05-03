import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logotype from 'assets/images/logo.svg';
import { Navbar } from './Navbar';
import { Socials } from './Socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className={[styles.header, styles.screen].join(' ')}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <Socials />
                    <Link className={styles.brand} to='/home/'>
                        <div className={styles.logotype}>
                            <img src={logotype} />
                        </div>
                        <h1 className={styles.title}>Светины Петельки</h1>
                    </Link>
                    <div className={styles.tools}>
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    );
};

export { Header };
