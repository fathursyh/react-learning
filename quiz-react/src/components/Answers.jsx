import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {answers.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssStyle = "";
                if (answerState === "answered" && isSelected) {
                    cssStyle = "selected";
                }
                if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                    cssStyle = answerState;
                }
                return (
                    <li key={answer} className="answer">
                        <button className={cssStyle} onClick={() => onSelect(answer)}>
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
