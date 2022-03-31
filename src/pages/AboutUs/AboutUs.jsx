import { Container, Row, Col, Button } from "react-bootstrap";

export default function AboutUs(){
    return (
    <Container>
        <Row>
            <Col>
                <h1>Our Mission</h1>
                <p>Mission statement</p>
            </Col>

            <Col>
                <img src="https://i.imgur.com/rWZ5Ctg.jpg" alt="adult guiding kid while she draws" height="400px" width="600px"/>
            </Col>
        </Row>
    </Container>
    )
}