import styles from './Navbar.module.scss';
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoGrid}>
                {/*<img alt={'star'} src={'/star.png'} className={styles.starImg}/>*/}
                <h2 className={styles.headerTitle}>The Quiz</h2>
            </div>
            <nav className={styles.nav}>

            </nav>
        </header>
    )
}
export default Navbar;