import './Dashboard.css';
import { useEffect, useState } from 'react';
import { getAllBehaviors } from '../../utils/behaviorApi';
import BehaviorsList from '../../components/BehaviorsList/BehaviorsList';
import { createBehavior } from '../../utils/behaviorApi';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({user}){

    const navigate = useNavigate();
    const [behaviors, setBehaviors] = useState([]);
    const [error, setError] = useState('');

    async function showAllBehaviors(){
        try {
            const data = await getAllBehaviors();
            setBehaviors([...data.behavior])
        }catch(err){
            setError(err.message);
        }
    }

    useEffect(() => {
        showAllBehaviors();
    }, []);


    return (
        <BehaviorsList behaviors={behaviors} user={user} />
    )
}