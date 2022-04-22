import { Container, Row, Col, Button } from "react-bootstrap";
import './ContactUs.css';
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function ContactUs(){
    return (
    <Container>
        <Row>
            <Col>
                <div className="contact-info">
                    <h1>Contact us</h1>
                    <p>Feel free to get in touch with the Journey Support Team. We're always open to discussing new projects, creative ideas, or opportunities to collaborate</p>
                    <p>Call us at <BsFillTelephoneFill /> +1 123 456 7890</p>
                </div>
            </Col>

            <Col>
                <div className="contact-forms">
                    <textarea id="textarea" cols="30" rows="1" placeholder="Enter your Name"></textarea>
                    <textarea id="textarea" cols="30" rows="1" placeholder="Enter a valid email address"></textarea>
                    <textarea id="textarea" cols="30" rows="5" placeholder="Enter your message"></textarea>
                    <Button variant="primary" size="lg">Submit</Button>
                </div>
            </Col>
        </Row>
    </Container>
    )
}