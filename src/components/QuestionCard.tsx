import React from 'react'
//types
import {AnswerObject} from '../App'
//styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestion: number;
}

//FC = functional component
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestion,
}) => { 
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNum} / {totalQuestion}
            </p>
            {/* https://stackoverflow.com/questions/37337289/react-js-set-innerhtml-vs-dangerouslysetinnerhtml */}
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
                    <ButtonWrapper 
                        key={answer} 
                        correct={userAnswer?.correctAnswer===answer}
                        userClicked={userAnswer?.answer===answer}
                    >
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;