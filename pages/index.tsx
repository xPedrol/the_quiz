import type {NextPage} from 'next';
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";
import styles from '../styles/Home.module.scss';
import Card from "../components/card/Card";
import {useState} from "react";
import constQuestions from "../constants/questions";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Home: NextPage = () => {
    const questions = constQuestions;
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
    const changeCurrentQuestion = (newQuestion: number) => {
        setCurrentQuestionId(newQuestion);
    };
    return (
        <>
            <Navbar/>
            <Container>
                <main className={styles.main}>
                    {currentQuestionId > 0 ?
                        <div className={`${styles.arrowGrid} ${styles.arrowGridLeft}`}
                             onClick={() => changeCurrentQuestion(currentQuestionId - 1)}>
                            <IoIosArrowBack className={styles.arrowIcon}/>
                        </div>
                        :
                        <div className={`${styles.arrowGrid} ${styles.emptyGrid}`}>
                            <IoIosArrowBack className={styles.arrowIcon}/>
                        </div>
                    }
                    {currentQuestionId >= 0 && questions.map((question) =>
                        <>
                            {currentQuestionId === question.id ?
                                <Card key={question.id} question={questions[currentQuestionId]}/>
                                :
                                null
                            }
                        </>
                    )}
                    {currentQuestionId < questions.length - 1 ?
                        <div className={`${styles.arrowGrid} ${styles.arrowGridRight}`}
                             onClick={() => changeCurrentQuestion(currentQuestionId + 1)}>
                            <IoIosArrowForward className={styles.arrowIcon}/>
                        </div>
                        :
                        <div className={`${styles.arrowGrid} ${styles.emptyGrid}`}>
                            <IoIosArrowForward className={styles.arrowIcon}/>
                        </div>
                    }
                </main>
            </Container>
        </>
    );
};

export default Home;
