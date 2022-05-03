import React, { useState, useEffect } from 'react';
import styles from './Socials.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
    return (
        <div className={styles.socials}>
            <a href='#'>
                <FontAwesomeIcon icon={faVk} />
            </a>
            <a href='#'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    );
};

export { Socials };
