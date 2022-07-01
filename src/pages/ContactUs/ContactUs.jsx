import './ContactUs.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useForm } from '@formspree/react';
import { useState } from 'react';
import ReactJsAlert from "reactjs-alert"

export default function ContactUs(){

    const [state, handleSubmit] = useForm("xvolnjwr");
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name]: value
        })
    }

    function alertUser(){
        setStatus(true)
        setType("success");
        setTitle("Your email has been sent!");
    }

    return (
        <>
            <ReactJsAlert
            status={status} // true or false
            type={type} // success, warning, error, info
            title={title}
            Close={() => setStatus(false)}
            />
            <div className="contact-form">
                <div className="contact-card">
                    <h1>Contact US</h1>
                    <p className="contact-p">Feel free to get in touch with the Journey Support Team. We're always open to discussing new projects, creative ideas, or opportunities to collaborate</p>
                    <p className="contact-p">Call us at <BsFillTelephoneFill /> +1 123 456 7890</p>
                </div>

                <div className="contact-form-card">
                    <form onSubmit={handleSubmit}>
                        <p className="contact-form-p">Enter your name</p>
                        <input 
                            type="text" 
                            className="contact-form-input-box" 
                            name="name" 
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Ex. John Doe" 
                            required 
                        />

                        <p className="contact-form-p">Enter a valid email address</p>
                        <input 
                            type="text" 
                            className="contact-form-input-box" 
                            name="email" 
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Ex. JohnDoe123@email.com" 
                            required 
                        />
                        
                        <p className="contact-form-p">Enter your message</p>
                        <textarea 
                            className="contact-form-input-box" 
                            cols="30" 
                            rows="4" 
                            name="message" 
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Ex. Let's Collaborate!">
                        </textarea>
                        
                        <button 
                            type="submit" 
                            className="button" 
                            onClick={alertUser}>
                                Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}