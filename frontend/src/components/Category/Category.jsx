import styles from './Category.module.scss';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const {title, picture} = props

    return (
        <Link className={styles.category} to='/products/'>
            <img src={picture} />
            <div className={styles.category__content}>
                <h2 className={styles.category__title}>{title}</h2>
            </div>
        </Link>
    );
}

export { Category };

