import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export default function Recording({handleAddRecord, id}){
    
    const navigate = useNavigate();
    const [occurrences, setOccurrences] = useState(0);
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [error, setError] = useState('');
    const countRef = useRef(null);

    function increment(e){
        e.preventDefault();
        setOccurrences(occurrences + 1)
    }

    function decrement(e){
        e.preventDefault();
        setOccurrences(occurrences - 1)
    }

    function startTimer(e){
        e.preventDefault();
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTime((timer) => timer + 1)
        }, 1000)
    }

    function stopTimer(e){
        e.preventDefault();
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    function resumeTimer(e){
        e.preventDefault();
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTime((timer) => timer + 1)
        }, 1000)
    }

    function resetTimer(e){
        e.preventDefault();
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTime(0)
    }

    function formatTime() {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    function handleRecordSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('time', time);
        formData.append('occurrences', occurrences);
        handleAddRecord(formData);
        setOccurrences(0);
        setTime(0);
        navigate(`/dashboard/behavior/${id}/records`)
    }

    return(
        <>
            <form onSubmit={handleRecordSubmit}>
                <h1>Increment or Decrement Here</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <h3>{occurrences}</h3>

                <h1>Timer</h1>
                <h3>{formatTime()}</h3>
                {
                    !isActive && !isPaused ? 
                    <button onClick={startTimer}>Start</button> : 
                    (
                        isPaused ? 
                        <button onClick={stopTimer}>Pause</button> 
                        : <button onClick={resumeTimer}>Resume</button>
                    )
                }
                <button onClick={resetTimer} disabled={!isActive}>Reset</button>
                <button onSubmit={handleRecordSubmit}>Submit</button>
            </form>
        </>
    )
}