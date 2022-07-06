import './BehaviorForm.css';

export default function BehaviorForm(props){
    return (
        <>
            <div className="behavior-form">
                <div className="behavior-form-card">
                    <form action="">
                        <h1>New Behavior</h1>
                        <p className="behavior-form-p">Behavior</p>
                        <input type="text" className="behavior-form-input-box" name="name" placeholder="Ex. Eloping, Cleaning, Washing Hands" required />
                        <p className="behavior-form-p">Recording</p>
                        <select className="behavior-form-input-box" name="recording_type" required>
                            <option value="">--Select a Behavior Recording--</option>
                            <option value="Frequency">Frequency</option>
                            <option value="Duration">Duration</option>
                            <option value="Interval Recording">Interval Recording</option>
                            <option value="Latency Recording">Latency Recording</option>
                        </select>
                        <div className="behavior-dates">

                            <p className="behavior-start-date">Start Date</p>
                            <input type="date" className="behavior-form-input-box" name="exp_date" id="exp_date" required />

                            <p className="behavior-goal-date">Goal To Complete</p>
                            <input type="date" className="behavior-form-input-box" name="cvv" id="cvv" required />
                        </div>
                        <button type="submit" className="button">Submit New Behavior</button>
                    </form>
                </div>
            </div>
        </>
    )
}