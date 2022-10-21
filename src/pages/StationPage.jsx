import React from "react";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import SingleStation from "../components/station/SingleStation";
import styled from "styled-components";

const StationPage = () => {
  const numberOfStations = 5;
  const [station, setStation] = useState([]);
  const [next, setNext] = useState(numberOfStations);

  useEffect(() => {
    axios
      .get("api/showstation/1", {
        headers: { "ngrok-skip-browser-warning": "564645564" },
      })
      .then((data) => {
        console.log(data.data);
        setStation(data.data[0].direction);
      });
  }, []);

 

  const handleMoreStations = () => {
    console.log("clicked");
    setNext(next + numberOfStations);
  };

  return (
    <Wrapper>
      <MainContainer>
        {/* pass station data to singleStation component */}
        <SingleStation station={station} moreStations={handleMoreStations} />
      </MainContainer>
    </Wrapper>
  );
};

export default StationPage;

const Wrapper = styled.div`
  /* background-color: #3a415e; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const MainContainer = styled.main`
  background-color: #fff;
  margin: 0 auto;
`;
