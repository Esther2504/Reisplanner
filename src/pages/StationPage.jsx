import React from "react";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import SingleStation from "../components/station/SingleStation";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StationPage = () => {
  // const numberOfStations = 5;
  const [stationdata, setStationdata] = useState([]);
  // const [next, setNext] = useState(numberOfStations);
  const [isLoaded, setLoaded] = useState(false)



  const handleMoreStations = () => {
    console.log("clicked");
    setNext(next + numberOfStations);
  };

  const { station } = useParams();

  console.log(station)

  const APIKEY = "process.env.REACT_APP_API_KEY"

  let config = {
    headers: {
      "Ocp-Apim-Subscription-Key": "f37c0dc4e1284e3495188b7c255ff626",
    }
  }

  useEffect(() => {
    axios.get(`?station=${station}&maxJourneys=10`, config).then((data) => {
      console.log(data);
      setStationdata(data.data.payload.departures);
      setLoaded(true)
    });
  }, []);

  console.log(stationdata)

  return (
    <Wrapper>
      <MainContainer>
        {/* pass station data to singleStation component */}
        {
                isLoaded ?
        <SingleStation station={stationdata} stationname={station} moreStations={handleMoreStations} /> :
<p>Loading....</p>
}
      </MainContainer>
    </Wrapper>
  );
};

export default StationPage;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const MainContainer = styled.main`
background-color: #3a415e;
width: 90%;
  margin: 0 auto;
  padding: 2%;
  border-radius: 8px;
`;
