import { useCallback, useState } from "react";
import QUESTIONS from "../data/questions.js";
import complete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [answerState, setAnswerState] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);
    // derived
    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = useCallback(
        (selectedAnswer) => {
            setAnswerState("answered");
            setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
            setTimeout(() => {
                if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                    setAnswerState("correct");
                } else {
                    setAnswerState("wrong");
                }
                setTimeout(() => {
                    setAnswerState("");
                }, 2000);
            }, 1000);
        },
        [activeQuestionIndex]
    );

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizComplete) {
        return (
            <div id="summary">
                <img src={complete} alt="Complete image" />
                <h2>Quiz Completed</h2>
            </div>
        );
    }
    const shuffledAnswer = [...QUESTIONS].sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeup={() => handleSelectAnswer(null)} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswer[activeQuestionIndex].answers.map((answer) => {
                        const isSelected = userAnswers[userAnswers.length - 1] === answer;
                        let cssStyle = '';
                        if (answerState === 'answered' && isSelected) {
                            cssStyle = 'selected';
                        }
                        if ((answerState === 'corect' || answerState === 'wrong') && isSelected) {
                            cssStyle = answerState;
                        }
                        return (
                            <li key={answer} className="answer">
                                <button className={cssStyle} onClick={handleSkipAnswer}>{answer}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
