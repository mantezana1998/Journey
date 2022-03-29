import './HomePage.css'
import { Alert } from "react-bootstrap";

export default function HomePage(){
    return(
    <>
        <body>
            <header>
                <div id="homePageHeader">
                    <div class="left">
                        <h1>Start the journey to happiness and wellness with outcome-based autism care.</h1>
                        <p>Delivering data collection to help your loved one achieve their goals.</p>
                        <button>Get Started</button>
                    </div>

                    <div class="right">
                        <img src="https://i.imgur.com/JK1D7Lz.jpg" alt="adult guiding kid while she draws" height="400px" width="600px"/>
                    </div>
                </div>
            </header>
        </body>
    </>    
    )
}