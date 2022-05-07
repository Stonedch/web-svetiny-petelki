import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Brand } from 'components/Header/Brand';
import { Created } from './Created';
import { Socials } from 'components/Header/Socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <Brand />
                <Link className={styles.copyright} to='/'>
                    © 2022 Светины Петельки
                </Link>
                <Socials className={styles.socials} />
                <Created />
            </div>
        </div>
    );
};

export { Footer };
