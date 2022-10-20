import React from "react";
import styled from "styled-components";
import { X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stations from "../components/Stations";

const OverviewPage = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch(`https://stoplight.io/mocks/blehteam/bleh-team/101174452/stations`)
      .then((res) => res.json())
      .then((data) => setStations(data));
  }, []);

  return (
    <>
      <h1>Overview</h1>
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
  margin: auto;
  border-radius: 8px;
  padding: 15px;
`;

export default OverviewPage;