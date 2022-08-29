import {TQuestion} from "../models/Question";

const constQuestions: TQuestion[] = [
    {
        id: 0,
        description:'What is the scientific name of a butterfly?',
        answers: [
            {
                id: 0,
                description: 'Apis Mellifera',
            },
            {
                id: 1,
                description: 'Coleoptera',
            },
            {
                id: 2,
                description: 'Formicidae',
            },
            {
                id: 3,
                description: 'Rhopalocera',
            }
        ],
        correctAnswerId: 0,
    },
    {
        id: 1,
        description:'How hot is the surface of the sun?',
        answers: [
            {
                id: 0,
                description: '1,233 K',
            },
            {
                id: 1,
                description: '5,778 K',
            },
            {
                id: 2,
                description: '12,130 K',
            },
            {
                id: 3,
                description: '101,300 K',
            }
        ],
        correctAnswerId: 1,
    },
    {
        id: 2,
        description:'Who are the actors in The Internship?',
        answers: [
            {
                id: 0,
                description: 'Ben Stiller, Jonah Hill',
            },
            {
                id: 1,
                description: 'Courteney Cox, Matt LeBlanc',
            },
            {
                id: 2,
                description: 'Kaley Cuoco, Jim Parsons',
            },
            {
                id: 3,
                description: 'Vince Vaughn, Owen Wilson',
            }
        ],
        correctAnswerId: 3,
    },
    {
        id: 3,
        description:'What is the capital of Spain?',
        answers: [
            {
                id: 0,
                description: 'Berlin',
            },
            {
                id: 1,
                description: 'Buenos Aires',
            },
            {
                id: 2,
                description: 'Madrid',
            },
            {
                id: 3,
                description: 'San Juan',
            }
        ],
        correctAnswerId: 2,
    },
    {
        id: 4,
        description:'What are the school colors of the University of Texas at Austin?',
        answers: [
            {
                id: 0,
                description: 'Black, Red',
            },
            {
                id: 1,
                description: 'Blue, Orange',
            },
            {
                id: 2,
                description: 'White, Burnt Orange',
            },
            {
                id: 3,
                description: 'White, Old gold, Gold',
            }
        ],
        correctAnswerId: 2,
    },
    {
        id: 5,
        description:'What is 70 degrees Fahrenheit in Celsius?',
        answers: [
            {
                id: 0,
                description: '18.8889',
            },
            {
                id: 1,
                description: '20',
            },
            {
                id: 2,
                description: '21.1111',
            },
            {
                id: 3,
                description: '158',
            }
        ],
        correctAnswerId: 2,
    }
];

export default constQuestions;