import './BehaviorForm.css';
import { useState } from 'react';

export default function BehaviorForm({handleAddBehavior}){

    const [behavior, setBehavior] = useState({
        nameOfBehavior: '',
        recording: '',
        startDate: '',
        goalDate: ''
    });

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setBehavior({...behavior, [name] : [value]});
    }

    function handleInputChange(e){
        const value = e.target.value;
        setBehavior({...behavior, recording: value})
    }

    function handleStartDateChange(e){
        const value = e.target.value;
        setBehavior({...behavior, startDate: value});
    }

    function handleGoalDateChange(e){
        const value = e.target.value;
        setBehavior({...behavior, goalDate: value});
    }

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        handleAddBehavior(formData)
    }

    return (
        <>
            <div className="behavior-form">
                <div className="behavior-form-card">
                    <form onSubmit={handleSubmit}>
                        <h1>New Behavior</h1>
                        <p className="behavior-form-p">Behavior</p>
                        <input 
                            type="text" 
                            className="behavior-form-input-box" 
                            name="nameOfBehavior" 
                            placeholder="Ex. Eloping, Cleaning, Washing Hands" 
                            onChange={handleChange}
                            value={behavior.nameOfBehavior}
                            required 
                        />
                        <p className="behavior-form-p">Recording</p>
                        <select 
                            className="behavior-form-input-box" 
                            name="recording_type" 
                            onChange={handleInputChange}
                            value={behavior.recording}
                            required
                        >
                            <option value="Default">--Select a Behavior Recording--</option>
                            <option value="Frequency">Frequency</option>
                            <option value="Duration">Duration</option>
                            <option value="Interval Recording">Interval Recording</option>
                            <option value="Latency Recording">Latency Recording</option>
                        </select>
                        <div className="behavior-dates">
                            <p className="behavior-start-date">Start Date</p>
                            <input 
                                type="date" 
                                className="behavior-form-input-box" 
                                name="start_date" 
                                id="start_date" 
                                value={behavior.startDate}
                                onChange={handleStartDateChange}
                                required 
                            />

                            <p className="behavior-goal-date">Goal To Complete</p>
                            <input 
                                type="date" 
                                className="behavior-form-input-box" 
                                name="goal_date" 
                                id="goal_date" 
                                value={behavior.goalDate}
                                onChange={handleGoalDateChange}
                                required 
                            />
                        </div>
                        <button type="submit" className="button">Submit New Behavior</button>
                    </form>
                </div>
            </div>
        </>
    )
}