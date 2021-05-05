export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string;
}

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
    console.log(data);
    
}

//API https://opentdb.com/api.php?amount=10&category=31&difficulty=medium