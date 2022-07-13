import './Dashboard.css';
import { useEffect, useState } from 'react';
import { getAllBehaviors } from '../../utils/behaviorApi';
import BehaviorsList from '../../components/BehaviorsList/BehaviorsList'

export default function Dashboard(){

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

    console.log(behaviors, 'behaviors!!!!!')

    return (
        <BehaviorsList behaviors={behaviors}/>
    )
}