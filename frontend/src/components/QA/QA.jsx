import styles from './QA.module.scss';
import plus from '../../assets/images/Plus.svg';

const QA = () => {
    return (
        <div className={styles.content}>
            <div className={styles.block}>
                <div className={styles.name}>
                    <a> Lorem Ipsum</a>
                </div>
                <div className={styles.img}>
                    <a href='#'><img src={plus} /></a>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.name}>
                    <a> Lorem Ipsum</a>
                </div>
                <div className={styles.img}>
                    <a href='#'><img src={plus} /></a>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.name}>
                    <a> Lorem Ipsum</a>
                </div>
                <div className={styles.img}>
                    <a href='#'><img src={plus} /></a>
                </div>
            </div>
            
            <div className={styles.block}>
                <div className={styles.name}>
                    <a> Lorem Ipsum</a>
                </div>
                <div className={styles.img}>
                    <a href='#'><img src={plus} /></a>
                </div>
            </div>
            
        </div>
    );
};

export { QA };
