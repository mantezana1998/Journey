import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import userService from '../../utils/userService';

export default function Login(props){

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setLogin({...login, [name]: value})
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await userService.login(login);
            props.handleSignUpOrLogin();
            navigate('/dashboard');
        }catch(err){
            setError(err.message)
        }
    }

    return(
        <>
            <h1 className="login-title">Login</h1>
            <Form className="login-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        value={login.email}
                        onChange={handleChange}
                        required 
                        />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={login.password} 
                        onChange={handleChange}
                        required
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Don't have an account? Click <a href='/signup'>Here</a></p>
            </Form>
        </>
    )
}