import { Container, Row, Col, Button } from "react-bootstrap";

export default function ContactUs(){
    return (
    <Container>
        <Row>
            <Col>
                <h1>Contact us</h1>
                <p>Feel free to get in touch with Journey Support Team. We're always open to discussing new projects, creative ideas, or opportunities to collaborate</p>
                <p>Mail Logo</p>
                <p>someEmail@email.com</p>
                <p>Phone logo</p>
                <p>+1 123 456 7890</p>
            </Col>

            <Col>
                <textarea id="textarea" cols="30" rows="10" placeholder="write here..."></textarea>
                <textarea id="textarea" cols="30" rows="10" placeholder="write here..."></textarea>
                <textarea id="textarea" cols="30" rows="10" placeholder="write here..."></textarea>
                <Button variant="primary" size="lg">Submit</Button>
            </Col>
        </Row>
    </Container>
    )
}