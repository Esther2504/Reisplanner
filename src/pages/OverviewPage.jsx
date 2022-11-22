import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Stations from "../components/Stations";

const OverviewPage = () => {
  const [stations, setStations] = useState([]);
  const [isLoaded, setLoaded] = useState(false)
  const [station, setStation] = useState([]);
  // useEffect(() => {
  //   fetch(`https://stoplight.io/mocks/blehteam/bleh-team/101174452/stations`)
  //     .then((res) => res.json())
  //     .then((data) => setStations(data));
  // }, []);

  const APIKEY = "process.env.REACT_APP_API_KEY"

  useEffect(() => {
    fetch(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations?land=nl`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Ocp-Apim-Subscription-Key": "f37c0dc4e1284e3495188b7c255ff626",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        
        setStations(data.payload.filter((station) => station.land == "NL"))
        
        setLoaded(true)
      });
     ;
  }, []);

  console.log(stations)

  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "30px"}}>Overzicht Stations</h1>
      <OverviewWrapper>
      {
                isLoaded ?
        <Stations data={stations} /> : <p>Is loading....</p>
}
      </OverviewWrapper>
    </>
  );
};

const OverviewWrapper = styled.div`
  background-color: #3a415e;
  color: white;
  width: 75%;
  margin: 50px auto;
  border-radius: 8px;
  padding: 15px;
`;

export default OverviewPage;