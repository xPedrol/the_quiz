import {Answer, TAnswer} from "./Answer";

export type TQuestion = {
    id: number;
    description: string;
    answers: TAnswer[];
    correctAnswerId: number;
    answered?: boolean;
    markAsAnswered(): void;
}

export class Question implements TQuestion {
    description: string;
    id: number;
    answers: Answer[];
    correctAnswerId: number;
    answered: boolean;

    constructor(question: TQuestion) {
        this.description = question.description;
        this.id = question.id;
        this.answers = question.answers;
        this.correctAnswerId = question.correctAnswerId;
        this.answered = false;
    }

    markAsAnswered(): void {
        this.answered = true;
    }
}