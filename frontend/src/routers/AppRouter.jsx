import { Routes, Route, Redirect } from 'react-router-dom';
import { Home } from '../views/Home';
import { CategoriesVi } from '../views/CategoriesVi';
import { ProductsView } from '../views/ProductsView';
import { routes } from '../constants';
import { NotFond } from 'views/NotFond';


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path={routes.HOME} element={<Home />} />
                <Route path={routes.CATEGORIES} element= {<CategoriesVi />} />
                <Route path={routes.PRODUCTS} element={<ProductsView />} />
                <Route path={routes.NOTFOND} element={<NotFond/>} />
            </Routes>
        </>
    );
}

export { AppRouter };

