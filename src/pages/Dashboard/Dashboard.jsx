import './Dashboard.css';
import { useEffect, useState } from 'react';
import { getAllBehaviors } from '../../utils/behaviorApi';
import BehaviorsList from '../../components/BehaviorsList/BehaviorsList'

export default function Dashboard(){

    const [behaviors, setBehaviors] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        showBehaviors();
    }, [])

    async function showBehaviors(){
        try{
            const data = await getAllBehaviors();
            setBehaviors(data);
        }catch(err){
            setError(err.message)
        }
    }
    
    const mapDis = behaviors.map((b) => {
        return (
            <h1>{b}</h1>
        )
    })
    return <h1>{mapDis}</h1>
}