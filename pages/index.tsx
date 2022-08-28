import type {NextPage} from 'next';
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";
import styles from '../styles/Home.module.scss';
import Card from "../components/card/Card";

const Home: NextPage = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <main className={styles.main}>
                    <Card/>
                </main>
            </Container>
        </>
    );
};

export default Home;
