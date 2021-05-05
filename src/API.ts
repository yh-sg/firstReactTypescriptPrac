import {shuffleArray} from './utils'

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount:number, difficulty: Difficulty) => {
    const endpoint = 
        `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json(); 
    //?why double await???
    //to await the fetch itself and await when convert to json();
    // console.log(data);
    // console.log("*****************************************************************")
    return data.results.map((question: Question)=>(
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers, question.correct_answer
            ]),
        }
    ))
}

//API https://opentdb.com/api.php?amount=10&category=31&difficulty=medium