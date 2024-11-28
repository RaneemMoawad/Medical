import React from "react";
import '../pages/login.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import logo from "../pic/logo.png"

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login-section">
            <div className="login-logo"> <img src={logo} alt="logo"/></div> 
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Username" className="username" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" className="pass" />
              </Form.Group>

              <Button variant="primary" type="submit" className="login-btn">
                Login
              </Button>
              <Link className="forgot">Forgot Password</Link>
              <span className="question">Dont have any account?</span>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
