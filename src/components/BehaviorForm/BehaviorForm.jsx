import './BehaviorForm.css';

export default function BehaviorForm(){
    return (
        <>
            <div className="behavior-form-card">
                {/* <div className="left-side">
                <img
                    src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
                    className="product"
                    alt="Shoes"
                />
                </div> */}
                <div className="right-side">
                    <form action="">
                        <h1>New Behavior</h1>
                        <p>Behavior</p>
                        <input type="text" className="behavior-form-input-box" name="name" placeholder="Ex. Eloping, Cleaning, Washing Hands" required />
                        <p>Recording</p>
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