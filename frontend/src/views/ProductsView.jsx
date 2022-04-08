import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Products } from '../components/Products';

const ProductsView = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Products />
            <Footer />
        </>
    );
}

export { ProductsView };

