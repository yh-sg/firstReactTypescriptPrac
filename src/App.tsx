import React,{useState} from 'react';
import { fetchQuizQuestions } from './API'
//Components
import QuestionCard from './components/QuestionCard'
//types(Enum)
import {QuestionState, Difficulty} from './API'
//styling
import {GlobalStyle, Wrapper} from './App.styles'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App: React.FC = () => {



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
    if(!gameOver){
      //user answer
      const answer = e.currentTarget.value,
      //check answer against correct answer
            correct = questions[number].correct_answer === answer;
      if(correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    nextQuestion===TOTAL_NUMBER ? setGameOver(true) : setNumber(nextQuestion);

  }

  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>

      <h1>React Quiz</h1>
      {(!gameOver || userAnswers.length!==TOTAL_NUMBER) && (
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      )}
      {!gameOver && <p className="score">Score: {score}</p>}
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

      {/* not gameover/loading/reach max num/when user haven't give ans/not max num */}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_NUMBER - 1
      &&(
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      )}

        </Wrapper>

    </div>
  );
}

export default App;