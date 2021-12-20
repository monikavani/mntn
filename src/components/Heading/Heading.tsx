import styles from './Heading.module.css';

export const Heading = (props : {title: string}) => {
    return (
        <h2 className={styles.headingTitle}>{props.title}</h2>
    );
}