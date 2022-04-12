import React, { useState, useEffect } from 'react';
import styles from './Products.module.scss';
import { Card } from './Card';
import { API_URL } from '../../http';

const Products = () => {
    const [ data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'products/')
            .then(response => response.json())
            .then(response => setData(response.results));
    });

    return data ? (
        <div className={[styles.products, styles.content, styles.screen].join(' ')}>
            {data.map(product => <Card title={product.name} picture={product.picture}>{product.body}</Card>)}
        </div>
    ) : null;
}

export { Products };

