import React, { useState, useEffect } from 'react';
import styles from './Categories.module.scss';
import image from '../../assets/images/header-image.png';
import { Category } from '../Category';

const Categories = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch('http://localhost/api/v1/categories/')
            .then(response => response.json())
            .then(response => setData(response.results));
    }, []);

    const categories = (
        <div className={[styles.categories, styles.content, styles.screen].join(' ')}>
            {data.map(category => <Category title={category.name} picture={category.picture} />)}
        </div>
    );

    return data ? categories : null;
}

export { Categories };

