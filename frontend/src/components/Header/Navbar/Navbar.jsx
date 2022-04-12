import React, { useState, useContext, useEffect } from 'react';
import { API_URL } from '../../../http';
import { Link } from 'react-router-dom';
import { Context } from '../../../index';
import { ModalWindow } from '../../ModalWindow';
import { AuthForm } from '../../AuthForm';
import styles from './Navbar.module.scss';
import img from '../../../assets/images/Logo.svg';
import facebook from '../../../assets/images/Facebook.svg';
import instag from '../../../assets/images/Instagram.svg';
import whatsapp from '../../../assets/images/WhatsApp.svg';
import phone from '../../../assets/images/Phone.svg';

const Navbar = () => {
    const [modalActive, setModalActive] = useState();
    const [ data, setData ] = useState(null);
    const { store } = useContext(Context);
    console.warn(store.isAuth);

    useEffect(() => {
        fetch(API_URL + 'settings/navbar/')
            .then(response => response.json())
            .then(response => setData(response.results));
    }, []);

    const login = (
        <span className={styles.auth} onClick={() => setModalActive(true)}>
            Войти
        </span>
    );

    const logout = (
        <span className={styles.auth} onClick={() => { store.logout(); window.location.reload() }}>
            Выйти
        </span>
    );

    const navbar = data ? (
        <>
            {data.map((item)=> <Link to={item.url}>{item.name}</Link>)}
        </>
    ) : null;

    return (
        <div className={styles.component}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <a href="/" className={styles.logo}>
                        <img src={img} />
                    </a>
                    <div className={styles.menu}>
                        {navbar}
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.soc}>
                        <a href="#"><img src={facebook} /></a>
                        <a href="#"><img src={instag} /></a>
                        <a href="#"><img src={whatsapp} /></a>
                    </div>
                    <div className={styles.phone}>
                        <img src={phone} />
                        <a href="tel: +70000000000"> +7 (000) 000-00-00 </a>
                    </div>
                    {localStorage.access ? logout : login}
                    <div className={styles.hamburger}>
                        <span></span>
                    </div>
                </div>
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <AuthForm />
            </ModalWindow>
        </div>
    );
}

export { Navbar };

