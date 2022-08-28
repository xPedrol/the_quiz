import {TAnswer} from "./Answer";

export type TQuestion = {
    id: number;
    description: string;
    answers: TAnswer[];
    correctAnswerId: number;
}

export class Question implements TQuestion {
    description: string;
    id: number;
    answers: TAnswer[];
    correctAnswerId: number;

    constructor(question: TQuestion) {
        this.description = question.description;
        this.id = question.id;
        this.answers = question.answers;
        this.correctAnswerId = question.correctAnswerId;
    }
}