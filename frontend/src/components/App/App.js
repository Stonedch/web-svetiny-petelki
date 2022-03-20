import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';

import { Button } from '../Button';
import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { LoginForm } from '../LoginForm';
import { ModalWindow } from '../ModalWindow';

function App() {
    const [modalActive, setModalActive] = useState();

    return (
        <div className="App">
            <Navbar />
            <Header />
            <LoginForm />
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <p>This's just test!</p>
            </ModalWindow>
            <button onClick={() => setModalActive(true)}>Open Modal</button>
        </div>
    );
}

export default App;

