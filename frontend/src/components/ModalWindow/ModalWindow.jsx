import styles from './ModalWindow.module.scss';

const ModalWindow = ({active, setActive, children}) => {
    return (
        <div className={active ? [styles.modal, styles.active].join(' ') : styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <span className={styles.close} onClick={() => setActive(false)}></span>
                {children}
            </div>
        </div>
    );
}

export { ModalWindow };

