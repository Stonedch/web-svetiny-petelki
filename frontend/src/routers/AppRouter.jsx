import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { routes } from '../constants';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={routes.HOME} element={<Home />} />
            </Routes>
        </>
    );
}

export { AppRouter };
