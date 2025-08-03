import { useState } from "react"
import QUESTIONS from '../data/questions.js';
import complete from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    // derived
    const activeQuestionIndex = userAnswers.length;
    const quizComplete =  activeQuestionIndex === QUESTIONS.length;
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAnswer => [
            ...prevAnswer, selectedAnswer
        ]);
    }
    if (quizComplete) {
        return (
            <div id="summary">
                <img src={complete} alt="Complete image" />
                <h2>Quiz Completed</h2>
            </div>
        )
    }
    const shuffledAnswer = ([...QUESTIONS]).sort(() => Math.random() - 0.5);

    return (
      <div id="quiz">
          <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswer[activeQuestionIndex].answers.map(answer => (
                    <li key={ answer } className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{ answer }</button>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    )
}