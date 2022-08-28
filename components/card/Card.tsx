import styles from './Card.module.scss';
const Card = () => {
    return (
        <div className={styles.card}>
            <h4 className={styles.question}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare efficitur mi non sollicitudin?</h4>
            <div className={styles.list}>
                <div className={styles.listItem}>
                    <h3 className={styles.letterOption}>A</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare efficitur mi non sollicitudin</p>
                </div>
                <div className={styles.listItem}>
                    <h3 className={styles.letterOption}>B</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare efficitur mi non sollicitudin</p>
                </div>
                <div className={styles.listItem}>
                    <h3 className={styles.letterOption}>C</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare efficitur mi non sollicitudin</p>
                </div>
                <div className={styles.listItem}>
                    <h3 className={styles.letterOption}>D</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare efficitur mi non sollicitudin</p>
                </div>
            </div>
        </div>
    );
};

export default Card;