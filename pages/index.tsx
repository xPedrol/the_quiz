import type {NextPage} from 'next';
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";
import styles from '../styles/Home.module.scss';
import Card from "../components/card/Card";
import {useEffect, useState} from "react";
import constQuestions from "../constants/questions";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Question, TQuestion} from "../models/Question";

const Home: NextPage = () => {
    const [questions, setQuestions] = useState<TQuestion[]>([]);
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
    const changeCurrentQuestion = (newQuestion: number) => {
        setCurrentQuestionId(newQuestion);
    };
    const findQuestionIndexByID = (questionId: number): number => {
        return questions.findIndex(question => question.id === questionId);
    };
    const findQuestionByID = (questionId: number): TQuestion | undefined => {
        return questions.find(question => question.id === questionId);
    };
    const markAsAnswered = (answerId: number) => {
        const auxQuestions = questions.map(question => {
            if (question.id === answerId) {
                question.markAsAnswered();
            }
            return question;
        });
        setQuestions(auxQuestions);
    };
    const canGoAhead = () => {
        const currentQuestion = findQuestionByID(currentQuestionId);
        return currentQuestion && currentQuestion.answered;
    };
    useEffect(() => {
        if (!Array.isArray(questions) || questions.length === 0) {
            const auxQuestions = constQuestions.map(question => new Question(question));
            setQuestions(auxQuestions);
        }
    }, [questions]);
    return (
        <>
            <Navbar/>
            <Container>
                <main className={styles.main}>
                    {/*{findQuestionIndexByID(currentQuestionId) > 0 ?*/}
                    {/*    <div*/}
                    {/*        className={`${canGoAhead() ? styles.enabledArrowGrid : styles.disabledArrowGrid} ${styles.arrowGridLeft}`}*/}
                    {/*        onClick={() => canGoAhead() ? changeCurrentQuestion(currentQuestionId - 1) : null}>*/}
                    {/*        <IoIosArrowBack className={styles.arrowIcon}/>*/}
                    {/*    </div>*/}
                    {/*    :*/}
                    {/*    <div className={`${styles.arrowGrid} ${styles.emptyGrid}`}>*/}
                    {/*        <IoIosArrowBack className={styles.arrowIcon}/>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    <div className={`${styles.arrowGrid} ${styles.emptyGrid}`}>
                        <IoIosArrowBack className={styles.arrowIcon}/>
                    </div>
                    {currentQuestionId >= 0 && questions.map((question) =>

                            currentQuestionId === question.id ?
                                <Card key={question.id} question={questions[currentQuestionId]}
                                      markAsAnswered={markAsAnswered}/>
                                :
                                null

                    )}
                    {findQuestionIndexByID(currentQuestionId) < questions.length - 1 ?
                        <div
                            className={`${canGoAhead() ? styles.enabledArrowGrid : styles.disabledArrowGrid} ${styles.arrowGridRight}`}
                            onClick={() => canGoAhead() ? changeCurrentQuestion(currentQuestionId + 1) : null}>
                            <IoIosArrowForward className={styles.arrowIcon}/>
                        </div>
                        :
                        <div className={`${styles.arrowGrid} ${styles.emptyGrid}`}>
                            <IoIosArrowForward className={styles.arrowIcon}/>
                        </div>
                    }
                    <button className={styles.nextButton}>
                        <IoIosArrowForward className={styles.nextButtonIcon}/>
                        <span className={styles.nextButtonText}>Next</span>
                        <IoIosArrowBack className={styles.nextButtonIcon}/>
                    </button>
                </main>
            </Container>
        </>
    );
};

export default Home;
