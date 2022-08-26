import './Dashboard.css';
import { useEffect, useState } from 'react';
import { getAllBehaviors } from '../../utils/behaviorApi';
import BehaviorsList from '../../components/BehaviorsList/BehaviorsList';

export default function Dashboard({user}){

    const [behaviors, setBehaviors] = useState([]);
    const [error, setError] = useState('');

    async function showAllBehaviors(){
        try {
            const data = await getAllBehaviors();
            setBehaviors({...data.behaviors})


        }catch(err){
            setError(err.message);
            console.log(err, "dashboard page")
        }
    }

    useEffect(() => {
        showAllBehaviors();
    }, []);

    return (
        <BehaviorsList behaviors={behaviors} user={user} />
    )
}