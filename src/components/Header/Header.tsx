import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src="src/images/logo.svg"/>
            <div className={styles.menu}>Menu</div>
            <div className={styles.account}>
                <img src="src/images/account.svg"/>
                <span>Account</span>
            </div>
        </header>
    );
}