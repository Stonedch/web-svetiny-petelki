import React, { useState, useEffect } from 'react';
import styles from './Products.module.scss';
import { Card } from './Card';
import { API_URL } from '../../http';

const Products = (props) => {
    const { category } = props;
    const [data, setData] = useState(null);

    let endpoint = API_URL + 'products/';

    if (category) {
        endpoint += '?category=' + category;
    }

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => setData(response.results));
    });

    return data ? (
        <div className={[styles.products, styles.content, styles.screen].join(' ')}>
            {data.map(product => <Card title={product.name} price={product.price} picture={product.picture}>{product.body}</Card>)}
        </div>
    ) : null;
}

export { Products };

