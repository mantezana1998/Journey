import './Behaviors.css';
import BehaviorForm from '../../components/BehaviorForm/BehaviorForm';
import { useState } from 'react';
import { createBehavior } from '../../utils/behaviorApi';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){

    const navigate = useNavigate();
    
    const [behaviorList, setBehavior] = useState([]);
    const [error, setError] = useState('');

    async function handleAddBehavior (behavior){
        try{
            const data = await createBehavior(behavior);
            setBehavior([
                data.behavior,
                ...behaviorList
            ])
            navigate('/dashboard')
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