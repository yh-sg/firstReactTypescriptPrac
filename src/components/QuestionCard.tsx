import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any; //! will come back to this later =.=" do not use any!
    userAnswer: any; //! will come back to this later =.=" do not use any!
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
        <div>
            <p className="number">
                Question: {questionNum} / {totalQuestion}
            </p>
            {/* https://stackoverflow.com/questions/37337289/react-js-set-innerhtml-vs-dangerouslysetinnerhtml */}
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;