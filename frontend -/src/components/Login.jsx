// // LoginForm.js
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../userservice";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Login.css';

export function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData);
            console.log(result);
            navigate(`/dashboard/${formData.email}`);
            
        } catch (error) {
            setTimeout(() => {
                alert('Email or Password is not valid.')
            }, 1000);
            console.log(error);
        }
    }
    return (
        <div className="hero"> <br />
        
        <Container id="containerlogin" className="wrapper1 container p-4">
            <Row>
               
                <Col >
                    <Form onSubmit={handleSubmit} id="form">
                    <h3 className="mb-4"> Login</h3>
                    <hr></hr>
                        <Form.Group className="mb-4">
                           
                            <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                       
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} required/>
                        </Form.Group>
<center>

<Button variant="primary" type="submit" class="btn">
                            Login
                        </Button>
</center>
                    </Form>
                    <hr />

                    <div className="register-link" >
                        <p >
                            You don't have an account? <Link to="/">Sign Up</Link>
                        </p>
                    </div>

                    {/* { loginError? alert('Email or Password is not valid.'):null}  */}
                </Col>
            </Row>
        </Container>
        
<div>
    <center>
    <footer>
                 <hr /><p>Created by, Dipak Wani</p> 
<p>&copy; 2023 My Dashboard. All rights reserved.</p>
{/* Add any additional footer content */}
</footer>
</center>

    </div>
        </div>
    );
}