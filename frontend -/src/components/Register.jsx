
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { saveUser } from '../userservice';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmpassword) {
      alert('Passwords do not match.');
      return false;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }

    return true;
  };

  const validateEmail = () => {
    const emailRegex = /[^0-9][a-zA-Z0-9]+@(gmail.com|cdac.in)/;
    const isValid = emailRegex.test(formData.email);

    if (!isValid) {
      alert('Email is not valid.');
      return false;
    }

    return true;
  };

  const checkValidate = () => {
    // Calling validation functions directly
    return validateForm() && validateEmail();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (checkValidate()) {
        // Implement the saveUser function in your service to send data to the server
        const result = await saveUser(formData);
         console.log('Data submitted:', result);
          console.log('Data submitted:', formData);
          
        setFormData({ username: '', email: '', password: '', confirmpassword: '' });
        alert('Sign in Successful. Please Login Your Account.');
       navigate("/login");

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shero"> <br />
    <Container className="mb-5 mt-5" fluid>
     
      <div className="wrapper" >
        
        <Form onSubmit={handleSubmit} id="form">
          <h1>Registration</h1><hr></hr>
<Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="username"
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
 
              <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
      
            
         
          

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
          </Form.Group>
        
          <center>

          <Button type="submit" className="btn">
            Sign Up
          </Button>
          </center>
          <hr />
          <div className="register-link">
      <p >
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
        </Form>
      </div>
      
    <center>
    <footer><p>Created by, Dipak Wani</p> 
<p>&copy; 2023 My Dashboard. All rights reserved.</p>
{/* Add any additional footer content */}
</footer>
</center>

      
    </Container>
    
    </div>
  );
};

export default Register;


