import React from "react";
import styled from "styled-components";
import { Train, Clock } from "lucide-react";

const SingleStationCard = ({ item }) => {
  const today = new Date(item.plannedDateTime);
  const time = today.toLocaleTimeString("nl-NL").slice(0, 5);

  
  return (
    <>
      <CardContainer>
        <TimeWrapper>
          <Clock color="#7E60FA" />
          <Time>{time}</Time>
        </TimeWrapper>
        <Direction>{item.direction}</Direction>
        <Train color="#7E60FA" size={35} />
        <Track>Van: spoor {item.plannedTrack}</Track>
        <Via>Via:</Via>
        <ViaWrapper>
          {item.routeStations.map((station, index) => (
            <>
              <List key={index}>
                <li>{station.mediumName}</li>
              </List>
            </>
          ))}
        </ViaWrapper>
      </CardContainer>
    </>
  );
};

export default SingleStationCard;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  padding: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  /* min-width: 20rem; */
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Direction = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Time = styled.p`
  font-size: 1.2rem;
`;

const Track = styled.p`
  margin: 1rem 0;
`;

const Via = styled.p`
  font-weight: 700;
  color: #7e60fa;
  margin-bottom: 1rem;
`;

const ViaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  padding: 0;
  display: flex;
  justify-content: center;
`;
