import React from "react";
import styled from "styled-components";
import SingleStationCard from "./SingleStationCard";

const SingleStation = ({ station, moreStations }) => {
  const departures = station.map((item, index) => (
    <SingleStationCard key={index} item={item} />
  ));

  return (
    <>
      <Header>Vetrektijden van station Den Bosch</Header>
      <SectionContainer>{departures}</SectionContainer>
      <Button onClick={moreStations}>Meer vertrektijden</Button>
    </>
  );
};

export default SingleStation;

const Header = styled.h4`
  color: #3a415e;
  padding-bottom: 2rem;
  font-weight: 700;
`;

const Button = styled.button`
  background-color: #7e60fa;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: #fff;
  font-weight: 700;
`;

const SectionContainer = styled.section`
  display: grid;
  max-width: 1200px;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
