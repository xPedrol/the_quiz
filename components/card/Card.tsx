import styles from './Card.module.scss';
import {TQuestion} from "../../models/Question";
import {useEffect, useState} from "react";
import {convertMsToHM} from "../../services/msConvert";
import questions from "../../constants/questions";

type Props = {
    hidden?:boolean;
    question: TQuestion;
    markAsAnswered: (answerId: number) => void;
}
const Card = ({question, markAsAnswered,hidden}: Props) => {
    const [timeLeft, setTimeLeft] = useState<number>(5000);
    const [selected, setSelected] = useState<number>(-1);
    useEffect(() => {
        if (question) {
            reset();
        }
    }, [question]);
    useEffect(() => {
        const list = document.querySelectorAll(`.${styles.listItem}`);
        if (selected >= 0) {
            markAsAnswered(question.id);
            if (selected <= 3) {
                if (selected === question.correctAnswerId) {
                    list.item(selected).classList.add(`${styles.successListItem}`);
                } else {
                    list.item(selected).classList.add(`${styles.dangerListItem}`);
                    list.item(question.correctAnswerId).classList.add(`${styles.correctListItem}`);
                }
            }
            list.forEach((item, i) => {
                item.classList.remove(`${styles.standardListItem}`);
                if (i !== selected) {
                    item.classList.add(`${styles.blocked}`);
                }
            });
        } else {
            list.forEach((item, i) => {
                if (!item.classList.contains(`${styles.standardListItem}`)) {
                    item.classList.add(`${styles.standardListItem}`);
                }

                item.classList.remove(
                    `${styles.withOpacityListItem}`,
                    `${styles.correctListItem}`,
                    `${styles.successListItem}`,
                    `${styles.dangerListItem}`
                );
            });
        }
    }, [selected]);
    useEffect(() => {
        if (timeLeft > 0) {
            if (selected < 0) {
                setTimeout(() => {
                    if (selected < 0) {
                        setTimeLeft(timeLeft - 1000);
                    }
                }, 1000);
            }
        } else {
            const card = document.querySelector(`.${styles.card}`);
            if (card && !card.classList.contains(`${styles.blocked}`)) {
                card.classList.add(`${styles.blocked}`);
                setSelected(100);
            }
        }
    }, [timeLeft]);
    const reset = () => {
        setSelected(-1);
        setTimeLeft(10000);
    };
    const handleQuestionLetter = (questionId: number) => {
        if (questionId === 0) return 'A';
        if (questionId === 1) return 'B';
        if (questionId === 2) return 'C';
        if (questionId === 3) return 'D';
        return 'N/A';
    };
    const selectResult = (answerId: number) => {
        if (selected < 0 && timeLeft > 0) {
            setSelected(answerId);
        }
    };
    return (
        <div className={`${styles.card} ${hidden?styles.hidden:''}`}>
            <div className={styles.cardHeader}>
                <h4 className={styles.question}>{question.description}</h4>
            </div>
            <div className={styles.list}>
                {question.answers.map(answer =>
                    <div onClick={() => selectResult(answer.id)} key={answer.id}
                         className={`${styles.listItem}`}>
                        <h3 className={styles.letterOption}>{handleQuestionLetter(answer.id)}</h3>
                        <p className={styles.listItemText}>{answer.description}</p>
                    </div>
                )}
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.scoreboard}>
                    <div className={styles.scoreGrid}>
                        <p className={styles.score}>{question.id + 1}/{questions.length}</p>
                    </div>
                    <div className={styles.scoreGrid}>
                        <p className={styles.score}>{convertMsToHM(timeLeft)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;