import React, { useState, useContext } from 'react';
import styles from './QA.module.scss';
import plus from '../../assets/images/Plus.svg';

const QA = () => {
    const [active, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!active);
    }

    return (
        <div className={[styles.content, styles.screen].join(' ')}>
            <div className={styles.qa}>

                <div className={active ? [styles.question, styles.active].join(' ') : styles.question}>
                    <div className={styles.question__header} onClick={toggleClass}>
                        <span className={styles.name}>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</span>
                        <img src={plus} />
                    </div>
                    <div className={styles.question__body}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tenetur, architecto, explicabo perferendis nostrum,
                            maxime impedit atque odit sunt pariatur illo obcaecati
                            soluta molestias iure facere dolorum adipisci eum? Saepe,
                            itaque.
                        </p>
                    </div>
                </div>

                <div className={active ? [styles.question, styles.active].join(' ') : styles.question}>
                    <div className={styles.question__header} onClick={toggleClass}>
                        <span className={styles.name}>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</span>
                        <img src={plus} />
                    </div>
                    <div className={styles.question__body}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tenetur, architecto, explicabo perferendis nostrum,
                            maxime impedit atque odit sunt pariatur illo obcaecati
                            soluta molestias iure facere dolorum adipisci eum? Saepe,
                            itaque.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export { QA };

