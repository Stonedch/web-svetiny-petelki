import React from 'react';
import styles from './Header.module.scss';
import { Brand } from './Brand';
import { Navbar } from './Navbar';
import { Socials } from './Socials';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Brand />
                <Navbar />
                <Socials />
            </div>
        </header>
    );
};

export { Header };
