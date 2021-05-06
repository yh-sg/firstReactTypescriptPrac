import React,{useState} from 'react';
import { fetchQuizQuestions } from './API'
//Components
import QuestionCard from './components/QuestionCard'
//types(Enum)
import {QuestionState, Difficulty} from './API'
import { StringLiteralLike } from 'typescript';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {

  const TOTAL_NUMBER = 10;

  //states
  const [loading, setLoading] = useState(false),
        [questions, setQuestions] = useState<QuestionState[]>([]),
        [number, setNumber] = useState(0),
        [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]),
        [score, setScore] = useState(0),
        [gameOver, setGameOver] = useState(true);
  
  // console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_NUMBER, Difficulty.MEDIUM);

    try {
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {!gameOver || userAnswers.length!==TOTAL_NUMBER && (
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      )}
      {!gameOver && <p className="score">Score: </p>}
      {loading && <p>Loading Questions ...</p>}

      {!loading && !gameOver && (
        <QuestionCard
          totalQuestion={TOTAL_NUMBER}
          questionNum={number+1}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
