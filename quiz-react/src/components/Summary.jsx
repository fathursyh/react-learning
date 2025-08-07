import complete from "../assets/quiz-complete.png";
import questions from "../data/questions";
export default function Summary({ userAnswers }) {
    const skipped = userAnswers.filter(item => item === null);
    const correct = userAnswers.filter((item, i) => item === questions[i].answers[0]);

    const skippedPercent = Math.round(
        (skipped.length / userAnswers.length) * 100
    )
    const correctPercent = Math.round(
        (correct.length / userAnswers.length) * 100
    )
    const wrongPercent = 100 - skippedPercent - correctPercent;
    return (
        <div id="summary">
            <img src={complete} alt="Complete image" />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedPercent}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctPercent}%</span>
                    <span className="text">Answered Correctly</span>
                </p>
                <p>
                    <span className="number">{wrongPercent}%</span>
                    <span className="text">Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, i) => (
                    <li key={i}>
                        <h3>{ i + 1 }</h3>
                        <p className="question">{questions[i].text}</p>
                        <p className="user-answer">{answer ?? 'Skipped'}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
