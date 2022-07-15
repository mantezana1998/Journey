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

    useEffect(() => {
        let isMounted = true;
        showAllBehaviors().then(data => {
            if(isMounted) setBehaviors(data);
        })
        return () => { isMounted = false }
    }, []);

    async function showAllBehaviors(){
        try {
            const data = await getAllBehaviors();
            setBehaviors(data.behaviors)
        }catch(err){
            setError(err.message);
            console.log(err, "dashboard page")
        }
    }
    
    return (
        <BehaviorsList />
    )
}