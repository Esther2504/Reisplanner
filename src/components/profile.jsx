import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper, Welcome } from "../styles/profile.style";

const Profile = () => {
  const [display, setDisplay] = useState([]);

  //grabs key:value from local storage
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (email) {
      setDisplay(email);
    }
    return;
  }, []);

  //To logout and return to login screen
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(),
      setTimeout(() => {
        navigate("/");
      }, 500);
  };

  //   console.log(display);

  return (
    <Container>
        <h1>Profiel</h1>
        <Wrapper>
      
      <Welcome>
        <h2>Welkom terug.</h2>
        <p>Email: {display}</p>
      </Welcome>
      <button onClick={handleLogout}>Uitloggen</button>
</Wrapper>
      <div>Display saved routes?</div>
      <div>QR code to share?</div>
      <div>Check calander?</div>
    </Container>
  );
};
export default Profile;
