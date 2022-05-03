import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { CategoriesVi } from 'views/CategoriesView';
import { ProductsView } from 'views/ProductsView';
import { routes } from 'constants';
import { NotFond } from 'views/NotFondView';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path={routes.HOME} element={<HomeView />} />

                <Route path={routes.CATEGORIES} element={<CategoriesVi />} />
                <Route path={routes.PRODUCTS} element={<ProductsView />} />
                <Route path={routes.NOTFOND} element={<NotFond />} />
            </Routes>
        </>
    );
};

export { AppRouter };
