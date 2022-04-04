import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import './HomePage.css';

export default function HomePage(){
    return(
    <>
        <main>
            <Container fluid id="header">
                <Row>
                    <Col>
                        <div id="header-intro">
                            <h3>Start the journey to happiness and wellness with outcome-based autism care.</h3>
                            <h6>Delivering data collection to help your loved one achieve their goals.</h6>
                            <Button variant="primary" size="lg">Get Started</Button>
                        </div>
                    </Col>

                    <Col>
                        <img src="https://i.imgur.com/JK1D7Lz.jpg" id="kid-drawing" alt="adult guiding kid while she draws" height="600px" width="800px"/>
                    </Col>
                </Row>
            </Container>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    Hello World!
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Hello World!
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    Hello World!
                </Tab>
            </Tabs>
        </main>
    </>    
    )
}