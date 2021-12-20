import styles from './Number.module.css';

export const Number = (props: {index: number}) => {
    return (
        <div className={styles.index}>{props.index < 10 ? '0' : '' }{props.index}</div>
    );
}