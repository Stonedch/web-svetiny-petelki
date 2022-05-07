import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { API_URL } from 'http';

const Navbar = () => {
    const [navbar, setNavbar] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'settings/navbar/')
            .then((response) => response.json())
            .then((response) => setNavbar(response.results));
    }, []);

    return navbar ? (
        <nav className={styles.navbar}>
            {navbar.map((item) => (
                <Link className={styles.item} to={item.url}>
                    {item.name}
                </Link>
            ))}
        </nav>
    ) : null;
};

export { Navbar };
