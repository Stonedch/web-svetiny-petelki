import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './store/store';

const store = new Store();

export const Context = createContext({
    store,
});

ReactDOM.render(
    <Context.Provider value={{ store }}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Context.Provider>,
    document.getElementById('root')
);
