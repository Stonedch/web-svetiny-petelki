import React, { useState, useContext } from 'react';
import styles from './Input.module.scss';

const Input = ({type, onChange, value, placeholder, name, label, active=true}) => {
    const input = (
        <label className={active ? [styles.label, styles.active].join(' ') : styles.label}>
            {label}
            <input
                className={styles.input}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                name={name}
            />
        </label>
    );

    return active ? input : false;
}

export { Input };

