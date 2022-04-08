import React, { useState, useContext } from 'react';
import styles from './Products.module.scss';
import { Card } from './Card';

const Products = () => {

    return (
        <div className={[styles.products, styles.content, styles.screen].join(' ')}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export { Products };

