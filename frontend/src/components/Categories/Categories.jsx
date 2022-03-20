import styles from './Categories.module.scss';
import image from '../../assets/images/header-image.png';
import { Category } from '../Category';

const Categories = () => {
    return (
        <div className={[styles.categories, styles.content, styles.screen].join(' ')}>
            <Category title="Именные игрушки" picture={image} />
            <Category title="Именные игрушки" picture={image} />
            <Category title="Именные игрушки" picture={image} />
            <Category title="Именные игрушки" picture={image} />
            <Category title="Именные игрушки" picture={image} />
            <Category title="Именные игрушки" picture={image} />
        </div>
    );
}

export { Categories };

