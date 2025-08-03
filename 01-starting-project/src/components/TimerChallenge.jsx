import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const [timerRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;
    const timer = useRef();
    const dialog = useRef();

    if (timerRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 50)
        }, 50);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }
    return (
        <>
       <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timerRemaining} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1? 's' : ''}
            </p>
            <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive? 'Stop': 'Start'} Challenge</button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Timer is Running..' : 'Timer stopped' }
            </p>

        </section>
        </>
    )
}