import React from 'react';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    const {title, children} = props;

    return (
        <details className={`${styles.group} group`}>
            <summary className={styles.summary}>
                <p className={styles.title}>{title}</p>
                <FontAwesomeIcon icon={faArrowDown} className={`${styles.icon} group-open:-rotate-180`} />
            </summary>
            <p className={styles.body}>
                {children}
            </p>
        </details>
    );
}

export { Item };
