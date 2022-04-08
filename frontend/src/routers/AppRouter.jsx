import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { ProductsView } from '../views/ProductsView';
import { routes } from '../constants';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={routes.HOME} element={<Home />} />
                <Route path={routes.PRODUCTS} element={<ProductsView />} />
            </Routes>
        </>
    );
}

export { AppRouter };

