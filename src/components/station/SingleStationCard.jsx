import React from "react";
import styled from "styled-components";
import { Train, Clock } from "lucide-react";

const SingleStationCard = ({ item }) => {
  const today = new Date(item.plannedTime);
  const time = today.toLocaleDateString("en-EN", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  console.log(time);
  return (
    <>
      <CardContainer>
        <TimeWrapper>
          <Clock color="#7E60FA" />
          <Time>{item.plannedTime}</Time>
        </TimeWrapper>
        <Direction>{item.direction}</Direction>
        <Train color="#7E60FA" size={35} />
        <Track>Van: spoor {item.plannedTrack}</Track>
        <Via>Via:</Via>
        <ViaWrapper>
          {item.routeStations.map((station, index) => (
            <>
              <List key={index}>
                <li>{station.stationName}</li>
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
