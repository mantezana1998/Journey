import './DashboardLayout.css'
import { Outlet } from 'react-router-dom';

export default function DashboardLayout (props){
    return (
        <div className="dashboard-container">
            <aside id="dashboard-aside">
                <img 
                    src={props.user.photoUrl} 
                    alt="user's photo" 
                    id='users-account-picture'
                    />
                <ul id="dashboard-options-list">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="">Start Session</a></li>
                    <li><a href="/dashboard/behaviorform">Behaviors</a></li>
                    <li><a href="">Progress</a></li>
                </ul>
            </aside>
            <main id="dashboard-main">
                <Outlet />
            </main>
        </div>
    )
}