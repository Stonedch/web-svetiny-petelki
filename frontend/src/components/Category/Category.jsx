import styles from './Category.module.scss';

const Category = (props) => {
    const {title, picture} = props

    return (
        <div className={styles.category}>
            <img src={picture} />
            <div className={styles.category__content}>
                <h2 className={styles.category__title}>{title}</h2>
            </div>
        </div>
    );
}

export { Category };

