import image from '../assets/images/header-image.png';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Annonce } from '../components/Annonce';
import { Categories } from '../components/Categories';
//import { QA } from '../components/Question';
import { Questions } from '../components/Questions';



const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Annonce
                title='Lorem Ipsum'
                subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                picture={image}
            />
            <Categories />
            <Annonce
                title='Lorem Ipsum'
                subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                reverse={true}
                picture={image}
            />
            <Questions/>
        </>
    );
}

export { Home };
