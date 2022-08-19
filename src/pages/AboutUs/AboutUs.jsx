import './AboutUs.css'; 

export default function AboutUs(){
    return (
    <>
    <div className="mission">
        <h1>A little progress each day adds up to big results</h1>
        <h3>Built by RBTs for RBTs</h3>
        <p>From recording data to sending this to your appropriate agency, Journey helps you record behavioral data outside of therapy session. We are dedicated to helping clients improve their progress and the ABA practice flow to do what they do best. We build smart tools that help graph your data, send confidential information to the correct agency, and lessen your workload to brighten our loved ones.</p>
    </div>
        <h1 id="meet-our-team-title">Meet our team</h1>
        <div class="cards">
            <div className="card">
            <img src="https://i.imgur.com/LNosXMw.png" alt="John" width="300" height="450"/>
            <h1>Max Antezana</h1>
            <p className="title">Full Stack Developer</p>
            <p>
                <button 
                onClick={
                    () => {window.open("https://mantezana1998.github.io/new-portfolio/", "_blank");}}>
                    Contact
                </button>
            </p>
            </div>
            <div className="card">
            <img src="https://i.imgur.com/9aYehlv.png" alt="John" width="300" height="450"/>
            <h1>DiAnne Lozano</h1>
            <p className="title">Full Stack Developer</p>
            <p>
                <button 
                onClick={
                    () => {window.open("https://github.com/ditabu", "_blank");}}>
                    Contact
                </button>
            </p>
            </div>
            <div className="card">
            <img src="https://i.imgur.com/vTb8yMT.png" alt="John" width="300" height="450"/>
            <h1>Steven Ballerini</h1>
            <p className="title">Full Stack Developer</p>
            <p>
                <button 
                onClick={
                    () => {window.open("https://github.com/StevenB94", "_blank");}}>
                    Contact
                </button>
            </p>
            </div>
            <div className="card">
            <img src="https://i.imgur.com/5SlMwqv.jpg" alt="John" width="300" height="450"/>
            <h1>Costas Ford</h1>
            <p className="title">Full Stack Developer</p>
            <p>
                <button 
                onClick={
                    () => {window.open("https://github.com/costasford", "_blank");}}>
                    Contact
                </button>
            </p>
            </div>
        </div>
    </>
    )
}