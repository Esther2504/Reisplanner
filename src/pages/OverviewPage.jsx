import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Stations from "../components/Stations";

const OverviewPage = () => {
  const [stations, setStations] = useState([]);

  // useEffect(() => {
  //   fetch(`https://stoplight.io/mocks/blehteam/bleh-team/101174452/stations`)
  //     .then((res) => res.json())
  //     .then((data) => setStations(data));
  // }, []);

  useEffect(() => {
    fetch(`https://eb5e-2a02-fe9-c1f-135a-a89a-a08f-3c35-921d.eu.ngrok.io/api/stations`, {
      headers: {
        "ngrok-skip-browser-warning": "873947"
      }
    })
      .then((res) => res.json())
      .then((data) => setStations(data));
  }, []);

  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "30px"}}>Overzicht Stations</h1>
      <OverviewWrapper>
        <Stations data={stations} />
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