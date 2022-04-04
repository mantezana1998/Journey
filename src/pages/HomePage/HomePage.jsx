import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import './HomePage.css';
// import { BsFillHandIndexFill } from "react-icons/bs";

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

            <div id="tab-groups">
                <h1>How it works</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Create Account">
                        <h3>Sign up for free and record all your data.</h3>
                        <p>See the progress </p> 
                    </Tab>
                    <Tab eventKey="record data" title="Record Data" BsFillBugFill>
                        <h3>Record your data and see your loved ones progress.</h3>
                        <p>See the progress </p> 
                    </Tab>
                    <Tab eventKey="graph data" title="Graph Data">
                        <h3>Graph data on a chart.</h3>
                        <p>See the progress </p> 
                    </Tab>
                    <Tab eventKey="send data" title="Send Data">
                        <h3>Send data to your ABA services or therapist.</h3>
                        <p>See the progress </p> 
                    </Tab>
                    <Tab eventKey="see progress" title="See Progress">
                        <h3>See the numbers on how much progress your loved one has done.</h3>
                        <p>See the progress </p> 
                    </Tab>
                </Tabs>
            </div>
        </main>
    </>    
    )
}