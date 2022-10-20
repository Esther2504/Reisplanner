import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, LoginCard, Form } from "../styles/login.style";

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(),
          setTimeout(() => {
            navigate("Profile");
          }, 500)
      };

  return (
    <>
      <Container>
        <h1>Welcome!</h1>
        <h2>Let us help you plan your route to work</h2>
        <LoginCard>
            <h3>Login</h3>
            <p>Don't have an account? <span><a href="#">Sign Up</a></span></p>
            <Form onSubmit={handleSubmit}>
                <label>Email:
                <input id="email" type="email" required/>
                </label>
                <button type="submit">Login</button>
            </Form>
        </LoginCard>
      </Container>
    </>
  );
};

export default Login;
