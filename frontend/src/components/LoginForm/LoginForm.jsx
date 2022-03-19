import React, { useState, useContext } from 'react';
import { Context } from '../../index';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {store} = useContext(Context);

    return (
        <div>
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="email"
                name="email"
            />
            <input
                type="text"
                onChange={e => setUsername(e.target.value)}
                value={username}
                placeholder="username"
                name="username"
            />
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                name="password"
            />

            <button onClick={() => store.login(email, password) }>
                Login
            </button>
            <button onClick={() => store.registration(email, username, password) }>
                Registration
            </button>
        </div>
    );
}

export { LoginForm };

