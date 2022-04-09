import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { CategoriesVi } from '../views/CategoriesVi';
import { routes } from '../constants';
import { NotFond } from 'views/NotFond';


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={routes.HOME} element={<Home />} />
                <Route path={routes.CATEGORIES} element= {<CategoriesVi />} />
                <Route path={routes.NOTFOND} element={<NotFond/>} />
            </Routes>
        </>
    );
}

export { AppRouter };
