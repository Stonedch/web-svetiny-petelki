import { Link } from 'react-router-dom';
import styles from './Category.module.scss';

const Category = (props) => {
    const {id, title, picture} = props

    return (
        <Link className={styles.category} to={'/products/' + id}>
            <img src={picture} />
            <div className={styles.category__content}>
                <h2 className={styles.category__title}>{title}</h2>
            </div>
        </Link>
    );
}

export { Category };

