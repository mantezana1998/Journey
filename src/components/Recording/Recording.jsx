import { useState, useRef } from "react";

export default function Recording({behavior}){

    const [occurrences, setOccurrences] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null)

    function increment(){
        setOccurrences(occurrences + 1)
    }

    function decrement(){
        setOccurrences(occurrences - 1)
    }

    function startTimer(){
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    function stopTimer(){
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    function resumeTimer(){
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    function resetTimer(){
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    function formatTime() {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }

    return(
        <>
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
        </>
    )
}