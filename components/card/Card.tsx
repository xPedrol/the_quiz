import styles from './Card.module.scss';
import {TQuestion} from "../../models/Question";
import {memo, useEffect, useState} from "react";
import {convertMsToHM} from "../../services/msConvert";
import questions from "../../constants/questions";

type Props = {
    question: TQuestion;
    markAsAnswered: (answerId: number) => void;
    active: boolean;
}
const standardTime = 10000;
const Card = ({question, active, markAsAnswered}: Props) => {
    const [timeLeft, setTimeLeft] = useState<number>(standardTime);
    const [selected, setSelected] = useState<number>(-1);
    useEffect(() => {
        const list = document.querySelector(`#list-${question.id}`)?.children;
        if (list) {
            if (selected >= 0) {
                markAsAnswered(question.id);
                if (selected <= 3) {
                    const selectedElement = list.item(selected);
                    if (selectedElement) {
                        if (selected === question.correctAnswerId) {
                            selectedElement.classList.add(`${styles.successListItem}`);
                        } else {
                            selectedElement.classList.add(`${styles.dangerListItem}`);
                            list.item(question.correctAnswerId)?.classList.add(`${styles.correctListItem}`);
                        }
                    }
                }
                for (let i = 0; i < list.length; i++) {
                    list[i].classList.remove(`${styles.standardListItem}`);
                    if (i !== selected) {
                        list[i].classList.add(`${styles.blocked}`);
                    }
                }
            } else {
                for (let i = 0; i < list.length; i++) {
                    if (!list[i].classList.contains(`${styles.standardListItem}`)) {
                        list[i].classList.add(`${styles.standardListItem}`);
                    }

                    list[i].classList.remove(
                        `${styles.withOpacityListItem}`,
                        `${styles.correctListItem}`,
                        `${styles.successListItem}`,
                        `${styles.dangerListItem}`
                    );
                }
            }
        }
    }, [selected]);
    useEffect(() => {
        if (timeLeft > 0) {
            if (selected < 0 && (active || timeLeft < standardTime)) {
                setTimeout(() => {
                    if (selected < 0) {
                        setTimeLeft(timeLeft - 1000);
                    }
                }, 1000);
            }
        } else {
            const card = document.querySelector(`#card-${question.id}`);
            if (card && !card.classList.contains(`${styles.blocked}`)) {
                card.classList.add(`${styles.blocked}`);
                setSelected(100);
            }
        }
    }, [timeLeft,active]);
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
        <div id={`card-${question.id}`} className={`${styles.card} ${!active ? styles.hidden : ''}`}>
            <div className={styles.cardHeader}>
                <h4 className={styles.question}>{question.description}</h4>
            </div>
            <div id={`list-${question.id}`} className={styles.list}>
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

export default memo(Card);