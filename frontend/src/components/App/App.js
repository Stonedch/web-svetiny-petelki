import logo from '../../logo.svg';
import './App.css';

import { Button } from '../Button';
import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { LoginForm } from '../LoginForm';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <LoginForm />
        </div>
    );
}

export default App;

