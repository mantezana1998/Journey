import './BehaviorForm.css';

export default function BehaviorForm(){
    return (
        <>
            <div className="behavior-form">
                <h2>New Behavior</h2>
                <form>
                    <div class="behavior-box">
                        <input type="text" name="" required="" />
                        <label>Target Behavior</label>
                    </div>
                    <div class="behavior-box">
                        <input type="text" name="" required="" />
                        <label>Collection Method</label>
                    </div>
                    <a href="#">Submit</a>
                </form>
            </div>
        </>
    )
}