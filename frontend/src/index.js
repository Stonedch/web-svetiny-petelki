import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Store from './store/store';

const store = new Store();

export const Context = createContext({
    store,
});

ReactDOM.render(
    <Context.Provider value={{ store }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context.Provider>,
    document.getElementById('root')
);

reportWebVitals();

