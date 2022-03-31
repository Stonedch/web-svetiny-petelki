import React, { useState } from 'react';
import styles from './QA.module.scss';
import plus from '../../assets/images/Plus.svg';

const QA = (props) => {
    const { title, children } = props;
    const [active, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!active);
    }

    return (
        <div className={styles.qa}>

            <div className={active ? [styles.question, styles.active].join(' ') : styles.question}>
                <div className={styles.question__header} onClick={toggleClass}>
                    <span className={styles.name}>{title}</span>
                    <img src={plus} />
                </div>
                <div className={styles.question__body}>
                    <p>
                        {children}
                    </p>
                </div>
            </div>

        </div>
    );
};

export { QA };

