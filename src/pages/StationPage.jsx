import React from "react";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import SingleStation from "../components/station/SingleStation";
import styled from "styled-components";

const StationPage = () => {
  const [station, setStation] = useState([]);

  useEffect(() => {
    axios.get("/stations/1234").then((data) => {
      setStation(data.data.station);
      // console.log(data)
    });
  }, []);

  return (
    <Wrapper>
      <MainContainer>
        {/* pass station data to singleStation component */}
        <SingleStation station={station} />
      </MainContainer>
    </Wrapper>
  );
};

export default StationPage;

const Wrapper = styled.div`
  background-color: #3a415e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.main`
  background-color: #fff;
  margin: 0 auto;
`;
