import styles from './Description.module.css';

export const Description = (props : {paragraph: string}) => {
    return (
        <p className={styles.para}>{props.paragraph}</p>
    );
}