import './Behaviors.css';
import BehaviorForm from '../../components/BehaviorForm/BehaviorForm';
import { useState, useEffect } from 'react';
import * as behaviorApi from '../../utils/behaviorApi';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){

    const navigate = useNavigate();
    
    const [behavior, setBehavior] = useState([]);
    const [error, setError] = useState('');

    async function handleAddBehavior (behavior){
        try{
            const data = await behaviorApi.createBehavior(behavior);
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

    async function getAllBehaviors(){
        try {
            const data = await behaviorApi.getAllBehaviors();
            setBehavior([...data.behavior])
        }catch(err){
            setError(err.message);
        }
    }

    useEffect(() => {
        getAllBehaviors();
    }, []);

    return (
        <>
            <BehaviorForm handleAddBehavior={handleAddBehavior}/>
        </>
    )
}