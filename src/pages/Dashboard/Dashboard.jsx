import './Dashboard.css';
import BehaviorsList from '../../components/BehaviorsList/BehaviorsList';

export default function Dashboard({behaviors}){

    return (
        <BehaviorsList behaviors={behaviors} />
    )
}