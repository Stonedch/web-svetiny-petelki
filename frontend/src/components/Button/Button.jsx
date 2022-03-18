import styles from './Button.module.scss';

const Button = (props) => {
    const { text='' } = props;
    return <button className={styles.button}>{text}</button>
}

export { Button };

