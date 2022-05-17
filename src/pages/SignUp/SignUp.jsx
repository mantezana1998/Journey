import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import userService from '../../utils/userService';

export default function SignUp(props){

    const navigate = useNavigate();

    const [signup, setSignUp] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setSignUp({...signup, [name]: value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await userService.signup();
            props.handleSignUpOrLogin()
            navigate('/')
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <>
            <h1 className="sign-up-title">Sign Up</h1>
            <Form className="sign-up-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email" 
                    onChange={handleChange}
                    value={signup.email}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    onChange={handleChange}
                    value={signup.password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? Click <a href='/login'>Here</a></p>
            </Form>
        </>
    )
}