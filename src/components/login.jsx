import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Container, LoginCard, Form } from "../styles/login.style";
import { signInWithGoogle } from "../utils/firebase"

const Login = () => {

  //Navigation function
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(),
          setTimeout(() => {
            navigate("Profile");
          }, 500)
      };

//Setting value in LocalStorage
    const [email, setEmail] = useState([]);

    useEffect(() => {
        localStorage.setItem('email', JSON.stringify(email));
      }, [email]);

    console.log(email);


  return (
    <>
      <Container>
        <h1>Welkom!</h1>
        <h2>Laat ons u helpen uw route naar het werk te plannen</h2>
        <LoginCard>
            <h3>Inloggen</h3>
            <Form  onSubmit={handleSubmit}>
                <label>Email:
                <input id="email" type="email" required onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Inloggen</button>
                <button onClick={signInWithGoogle}>Google Login</button>
            </Form>
        </LoginCard>
      </Container>
    </>
  );
};

export default Login;
