import styles from './Annonce.module.scss';

const Annonce = (props) => {
    const {title, subtitle, body, picture, reverse=false} = props

    return (
        <div className={styles.annonce}>
            <div className={reverse ? [styles.content, styles.screen, styles.content_reverse].join(' ') : [styles.content, styles.screen].join(' ')}>
                <div className={styles.annonce__column}>
                    <h2 className={styles.annonce__title}>{title}</h2>
                    <h3 className={styles.annonce__subtitle}>{subtitle}</h3>
                    <p className={styles.annonce__par}>{body}</p>
                </div>
                <div className={styles.annonce__column}>
                    <div className={styles.annonce__picture}>
                        <img src={picture} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Annonce };

