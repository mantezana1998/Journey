import './HomePage.css'
import { Container, Row, Col } from "react-bootstrap"

export default function HomePage(){
    return(
    <>
        <body>
            <header>
                <Container>
                    <Row>
                        <Col>
                        <h1>Start the journey to happiness and wellness with outcome-based autism care.</h1>
                        <p>Delivering data collection to help your loved one achieve their goals.</p>
                        <button>Get Started</button>
                        </Col>

                        <Col>
                        <img src="https://i.imgur.com/JK1D7Lz.jpg" alt="adult guiding kid while she draws" height="400px" width="600px"/>
                        </Col>
                    </Row>
                </Container>
            </header>
        </body>
    </>    
    )
}