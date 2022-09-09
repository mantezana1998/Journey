import { useState, useRef } from "react";
import { createRecord } from "../../utils/recordApi";

export default function Recording({id}){

    const [occurrences, setOccurrences] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [error, setError] = useState('');
    const [recordList, setRecordList] = useState([]);
    const countRef = useRef(null);
    const [today, setToday] = useState('');
    const [record, setRecord] = useState({ 
        time: 0,
        date: new Date(), 
        occurrences: 0
    })

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

    async function handleAddRecord(record){
        try{
            const data = await createRecord(record);
            setRecordList([
                data.record,
                ...recordList
            ]);
        }catch(err){
            setError(err.message)
        }
    }

    function handleRecordTime(e){
        const value = e.target.value;
        setRecord({...record, time: value})
    }

    // function handleDate(){
    //     let today = new Date();
    //     let current = `
    //         ${today.getHours()}:${today.getMinutes}:${today.getSeconds()} 
    //         ${today.getMonth()}/${today.getDay}/${today.getFullYear}
    //         `;
    //     setToday(current);
    // }

    function handleRecordOccurrences(e){
        const value = e.target.value;
        setRecord({...record, occurrences: value})
    }

    function handleRecordSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('time', record.time);
        formData.append('date', record.date);
        formData.append('occurrences', record.occurrences);
        handleAddRecord(formData)
    }

    return(
        <>
            <form onSubmit={handleAddRecord}>
                <h1>Increment or Decrement Here</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <input
                    type='number'
                    name='occurrences'
                    placeholder='0'
                    onChange={handleRecordOccurrences}
                    value={record.occurrences}
                    required
                    >
                    {occurrences}
                </input>

                <h1>Timer</h1>
                <input
                    type='number'
                    name='time'
                    placeholder='00:00'
                    onChange={handleRecordTime}
                    value={record.time}
                    required
                    >
                    {formatTime()}
                </input>
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
                <button onClick={() => {handleRecordSubmit; handleDate;}}>Submit</button>
            </form>
        </>
    )
}