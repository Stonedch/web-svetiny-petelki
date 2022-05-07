import React from 'react';
import styles from './Created.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Created = () => {
    return (
        <a
            href='https://github.com/stonedch/'
            target='_blank'
            className={styles.created}
        >
            Created <FontAwesomeIcon icon={faGithub} /> at stonedch
        </a>
    );
};

export { Created };
