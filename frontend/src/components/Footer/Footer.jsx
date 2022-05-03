import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Navbar } from 'components/Header/Navbar';
import { Socials } from 'components/Header/Socials';

const Footer = () => {
    return (
        <div className={[styles.footer, styles.screen].join(' ')}>
            <div className={styles.content}>
                <Socials />
                <Navbar />
                <Link className={styles.copyright} to='/'>
                    ©2022 Svetenpetelki. All rights reserved
                </Link>
            </div>
        </div>
    );
};

export { Footer };
