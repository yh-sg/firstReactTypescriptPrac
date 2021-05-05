import React,{useState} from 'react';
import { fetchQuizQuestions } from './API'
//Components
import QuestionCard from './components/QuestionCard'
//types(Enum)
import {Difficulty} from './API'

const App = () => {

  const TOTAL_NUMBER = 10;

  //states
  const [loading, setLoading] = useState(false),
  [questions, setQuestions] = useState([]),
  [number, setNumber] = useState(0),
  [userAnswers, setUserAnswers] = useState([]),
  [score, setScore] = useState(0),
  [gameOver, setGameOver] = useState(true);
  
  console.log(fetchQuizQuestions(TOTAL_NUMBER,Difficulty.MEDIUM));
  

  const startTrivia = async () => {
    
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        totalQuestion={TOTAL_NUMBER}
        questionNum={number+1}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
