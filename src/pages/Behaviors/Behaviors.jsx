import './Behaviors.css';
import BehaviorForm from '../../components/BehaviorForm/BehaviorForm';
import { useState, useEffect } from 'react';
import { createBehavior } from '../../utils/behaviorApi';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){

    const navigate = useNavigate();
    
    const [behavior, setBehavior] = useState([]);
    const [error, setError] = useState('');

    async function handleAddBehavior (behavior){
        try{
            const data = await createBehavior(behavior);
            setBehavior([
                data.behavior,
                ...behavior
            ])
            navigate('/dashboard')
            console.log(data, 'This is the new behavior!')
        }catch(err){
            setError(err.message)
        }
    }

    return (
        <>
            <BehaviorForm handleAddBehavior={handleAddBehavior}/>
        </>
    )
}