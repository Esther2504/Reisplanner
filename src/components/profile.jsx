import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
        }, 500)
    };

  //   console.log(display);

  return (
    <div>
      <h1>Profiel</h1>
      <h2>Email: {display}</h2>
      
      <div>Display saved routes?</div>
      <div>QR code to share?</div>
      <div>Check calander?</div>
      <button onClick={handleLogout}>Uitloggen</button>
    </div>
  );
};
export default Profile;
