import { Form, Button } from 'react-bootstrap';
import './SignUp.css';

export default function SignUp(){
    return(
        <>
            <h1 className="sign-up-title">Sign Up</h1>
            <Form className="sign-up-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? Click <a href='/login'>Here</a></p>
            </Form>
        </>
    )
}