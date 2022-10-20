import React from "react";
import styled from "styled-components";
import SingleStationCard from "./SingleStationCard";

const SingleStation = ({ station }) => {
  const departures = station.map((item, index) => (
    <SingleStationCard key={index} item={item} />
  ));

  return <SectionContainer>{departures}</SectionContainer>;
};

export default SingleStation;

const SectionContainer = styled.section`
  display: grid;
  background-color: #3a415e;
  max-width: 1200px;
  gap: 1rem;
  /* justify-items: center; */

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
