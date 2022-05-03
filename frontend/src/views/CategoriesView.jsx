import React from 'react';
import { Categories } from 'components/Categories';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Navbar } from 'components/Header/Navbar';

export const CategoriesVi = () => {
    return (
        <>
            <Header />
            <Categories />
            <Footer />
        </>
    );
};
