import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LoginCard, Form, Main } from "../styles/login.style";
// import { signInWithGoogle } from "../utils/firebase";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
const Login = () => {
  //Navigation function
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(),
      setTimeout(() => {
        navigate("Profile");
      }, 500);
  };
  //Setting value in LocalStorage
  const [email, setEmail] = useState([]);
  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);
  console.log(email);
  // const auth = getAuth();
  // const user = auth.currentUser;
  // useEffect(() => {
  //   const listener = onAuthStateChanged(auth, (user) => {
  //     handleSubmit();
  //   });
  //   return () => {
  //     listener();
  //   };
  // }, []);

  return (
    <>
    <Main>
      <Container>
        <h1>Welkom bij Bleh!</h1>
        <p>
          <em>Wij plannen uw reis met een zucht..</em>
        </p>
        <LoginCard>
          <h3>Inloggen</h3>
          <Form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                id="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button type="submit">Inloggen</button>
            {/* <button onClick={signInWithGoogle}>Google login</button> */}
          </Form>
        </LoginCard>
      </Container>
      </Main>
    </>
  );
};

export default Login;
