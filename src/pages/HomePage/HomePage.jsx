import './HomePage.css'
import { Container, Row, Col, Button } from "react-bootstrap"

export default function HomePage(){
    return(
    <>
        <body>
            <main>
                <Container>
                    <Row>
                        <Col>
                        <h1>Start the journey to happiness and wellness with outcome-based autism care.</h1>
                        <p>Delivering data collection to help your loved one achieve their goals.</p>
                        <Button variant="primary" size="lg">Get Started</Button>
                        </Col>

                        <Col>
                        <img src="https://i.imgur.com/JK1D7Lz.jpg" alt="adult guiding kid while she draws" height="400px" width="600px"/>
                        </Col>
                    </Row>
                </Container>
            </main>
        </body>
    </>    
    )
}