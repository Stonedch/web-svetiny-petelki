import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Products } from 'components/Products';

const ProductsView = () => {
    const { category } = useParams();

    return (
        <>
            <Header />
            <Products category={category} />
            <Footer />
        </>
    );
};

export { ProductsView };
