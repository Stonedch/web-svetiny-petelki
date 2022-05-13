import React, { useState, useEffect } from 'react';
import styles from './Categories.module.scss';
import { Item } from './Item';
import { API_URL } from 'http';

const Categories = () => {
    const [ categories, setCategories ] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'categories/')
            .then(response => response.json())
            .then(response => setCategories(response.results));
    }, []);
    
    return categories ? (
        <section className={styles.categories}>
            {categories.map((category) => (
                <Item
                    url={`#${category.id}`}
                    title={category.name}
                    image={category.picture}
                />
            ))}
        </section>
    ) : null;
}

export { Categories };
