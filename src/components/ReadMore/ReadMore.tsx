import styles from './ReadMore.module.css';

export const ReadMore = () => {
    return (
        // href can be set as a prop later
        <a href="#" className={styles.readMore}>
            <span>Read More</span> 
            <img src="src/images/navigation.svg"/>
        </a>
    );
}