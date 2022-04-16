import React, { useState, useEffect } from 'react';
import styles from './Categories.module.scss';
import { Category } from './Category';
import { API_URL } from 'http';

const Categories = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'categories/')
            .then(response => response.json())
            .then(response => setData(response.results));
    }, []);

    return data ? (
        <div className={[styles.categories, styles.content, styles.screen].join(' ')}>
            {data.map(category => <Category id={category.id} title={category.name} picture={category.picture} />)}
        </div>
    ) : null;
}

export { Categories };

