import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeup}) {
    const [remaining, setRemaining] = useState(timeout);

    // yg ini buat waktu beneran nunggu
    useEffect(() => {
        const timer = setTimeout(onTimeup, timeout);
        return () => clearTimeout(timer);
    }, [timeout, onTimeup]);

    // yg ini buat progress bar
    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(prev => prev - 100)
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return <progress id="question-time" max={timeout} value={remaining} />
}