import React from "react";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import SingleStation from "../components/station/SingleStation";
import styled from "styled-components";

const StationPage = () => {
  // const numberOfStations = 5;
  const [station, setStation] = useState([]);
  // const [next, setNext] = useState(numberOfStations);
  const [isLoaded, setLoaded] = useState(false)


  console.log(station)

  const handleMoreStations = () => {
    console.log("clicked");
    setNext(next + numberOfStations);
  };

  const APIKEY = "process.env.REACT_APP_API_KEY"

  let config = {
    headers: {
      "Ocp-Apim-Subscription-Key": "f37c0dc4e1284e3495188b7c255ff626",
    }
  }

  useEffect(() => {
    axios.get("?station=ATN", config).then((data) => {
      console.log(data);
      setStation(data.data.payload.departures);
      setLoaded(true)
    });
  }, []);

  return (
    <Wrapper>
      <MainContainer>
        {/* pass station data to singleStation component */}
        {
                isLoaded ?
        <SingleStation station={station} moreStations={handleMoreStations} /> :
<p>Loading....</p>
}
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
