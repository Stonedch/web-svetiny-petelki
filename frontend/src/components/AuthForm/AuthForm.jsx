import React, { useState, useContext } from 'react';
import { Context } from '../../index';
import { Input } from '../Input';
import styles from './AuthForm.module.scss';

const AuthForm = () => {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {store} = useContext(Context);

    return (
        <div className={styles.auth}>
            <div className={styles.auth__switchers}>
                <span
                    className={isLoginPage ? [styles.auth__switcher, styles.active].join(' ') : styles.auth__switcher}
                    onClick={() => setIsLoginPage(true)}
                >
                    Войти
                </span>
                <span
                    className={isLoginPage ? styles.auth__switcher : [styles.auth__switcher, styles.active].join(' ') }
                    onClick={() => setIsLoginPage(false)}
                >
                    Регистрация
                </span>
            </div>

            <div className={styles.auth__form}>
                <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="ivan.ivanov@gmail.com"
                    name="email"
                    label="E-mail"
                />
                <Input
                    active={!isLoginPage}
                    type="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="ivanivanov"
                    name="username"
                    label="Логин"
                />
                <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    label="Пароль"
                />

                <button onClick={() => store.login(email, password)}>
                    Login
                </button>
                <button onClick={() => store.registration(email, username, password)}>
                    Registration
                </button>
            </div>

        </div>
    );
}

export { AuthForm };

