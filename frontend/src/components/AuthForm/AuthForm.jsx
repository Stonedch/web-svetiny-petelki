import React, { useState, useContext } from 'react';
import styles from './AuthForm.module.scss';
import { Context } from 'index';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

const AuthForm = () => {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {store} = useContext(Context);

    const loginButton = (
        <Button
            onClick={() => store.login(email, password).then((response) => { if (response.status == 200) window.location.reload() })}
            type="submit"
        >
            Войти
        </Button>
    );

    const registrationButton = (
        <Button
            onClick={() => store.registration(email, username, password).then((response) => { if (response.status == 201) window.location.reload() })}
            type="submit"
        >
            Зарегистрироваться
        </Button>
    );

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

                { isLoginPage ? loginButton : registrationButton }
            </div>

        </div>
    );
}

export { AuthForm };

