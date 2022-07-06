import BehaviorForm from '../../components/BehaviorForm/BehaviorForm';
import { useState } from 'react';
import * as behaviorApi from '../../utils/behaviorApi';

export default function Behaviors(){
    
    const [behavior, setBehavior] = useState([]);
    const [error, setError] = useState('');

    async function handleAddBehavior (behavior){
        try{
            const data = await behaviorApi.createBehavior(behavior);
            setBehavior([
                data.behavior,
                ...behavior
            ])
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