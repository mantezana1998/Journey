import './Dashboard.css';

export default function Dashboard(){
    return(
        <>
            <div className="dashboard-container">
                <aside id="dashboard-aside">
                    <h1>Aside</h1>
                    <ul id="dashboard-options-list">
                        <li><a href="">Dashboard</a></li>
                        <li><a href="">Start Session</a></li>
                        <li><a href="">Behaviors</a></li>
                        <li><a href="">Progress</a></li>
                    </ul>
                </aside>
                <main id="dashboard-main">
                    <h1>Welcome to the start of your Journey!</h1>
                    <p>No Behaviors to record yet!</p>
                </main>
            </div>
        </>
    )
}