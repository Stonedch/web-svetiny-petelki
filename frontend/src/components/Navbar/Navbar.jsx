import React, { useState } from 'react';

import { ModalWindow } from '../ModalWindow';
import { AuthForm } from '../AuthForm';

import styles from './Navbar.module.scss';
import img from '../../assets/images/Logo.svg';
import facebook from '../../assets/images/Facebook.svg';
import instag from '../../assets/images/Instagram.svg';
import whatsapp from '../../assets/images/WhatsApp.svg';
import phone from '../../assets/images/Phone.svg';

const Navbar = () => {
    const [modalActive, setModalActive] = useState();

    return (
        <div className={styles.component}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <a href="/" className={styles.logo}>
                        <img src={img} />
                    </a>
                    <div className={styles.menu}>
                        <a href="#">Главная</a>
                        <a href="#">Наборы</a>
                        <a href="#">Именные игрушки</a>
                        <a href="#">Контакты</a>
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
                    <span className={styles.auth} onClick={() => setModalActive(true)}>
                        Войти
                    </span>
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

