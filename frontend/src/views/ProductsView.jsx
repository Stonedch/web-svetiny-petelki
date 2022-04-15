import { useParams } from 'react-router-dom';
import { Navbar } from 'components/Header/Navbar';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Products } from 'components/Products';

const ProductsView = () => {
    const { category } = useParams();

    return (
        <>
            <Navbar />
            <Header />
            <Products category={category} />
            <Footer />
        </>
    );
}

export { ProductsView };

