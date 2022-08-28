export type TAnswer = {
    id: number;
    description: string;
}

export class Answer implements TAnswer {
    description: string;
    id: number;

    constructor(answer: TAnswer) {
        this.description = answer.description;
        this.id = answer.id;
    }
}