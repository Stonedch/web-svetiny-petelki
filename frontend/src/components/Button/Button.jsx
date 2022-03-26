import styles from './Button.module.scss';

const Button = (props) => {
    const {active=true, type, onClick, children} = props;

    return (
        <button
            type={type}
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export { Button };

