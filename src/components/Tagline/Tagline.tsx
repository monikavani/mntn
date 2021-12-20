import styles from './Tagline.module.css';

export const Tagline = (props : {title: string}) => {
    return (
        <h5 className={styles.taglineTitle}>
            <span className={styles.taglineTitleLine}></span>
            <span>{props.title}</span>
        </h5>
    );
}