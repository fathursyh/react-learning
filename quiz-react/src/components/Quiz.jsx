import { useCallback, useState } from "react";
import QUESTIONS from "../data/questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [answerState, setAnswerState] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);
    // derived
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    let timer = 10000;

    if (answerState === 'answered') {
        timer = 3000;
    }

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

    const handleSkipAnswer = useCallback(() => answerState === '' ? handleSelectAnswer(null) : null , [handleSelectAnswer]);

    if (quizComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            <div key={activeQuestionIndex} id="question">
                <QuestionTimer timeout={timer} onTimeup={handleSkipAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <Answers answers={QUESTIONS[activeQuestionIndex].answers} answerState={answerState} selectedAnswer={userAnswers[userAnswers.length - 1]} onSelect={handleSelectAnswer} />
            </div>
        </div>
    );
}
