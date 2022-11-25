import React from "react";
import styled from "styled-components";
import personfill from "./../../personfill.svg";
import personnofill from "./../../personnofill.svg";
import person3 from "./../../person3.svg";

export default function Leg({ leg }) {
  const today = new Date(leg.origin.plannedDateTime);
  const time = today.toLocaleTimeString("nl-NL").slice(0, 5);
  const today2 = new Date(leg.destination.plannedDateTime);
  const time2 = today2.toLocaleTimeString("nl-NL").slice(0, 5);

  return (
    <Wrapper>
      {/* <div class="vl"></div> */}
      <Trip>
        <StartStation>
          <Time>{time}</Time>

          <StationName>{leg.origin.name}</StationName>
          <Track>Spoor {leg.origin.plannedTrack}</Track>
        </StartStation>
        <TripInfo>
          <p></p>
          <Train>
            <p>{leg.product.displayName}</p>
            <p>Richting {leg.direction}</p>
          </Train>

          {/* {leg.stops.map((stop) => {
            return <span>{stop.name}</span>
          })} */}
          {/* <p>{leg.crowdForecast}</p> */}
          <div>
            {leg.crowdForecast === "LOW" ? (
              <>
                <img src={personfill} />
                <img src={personnofill} />
                <img src={personnofill} />
              </>
            ) : leg.crowdForecast === "MEDIUM" ? (
              <>
                <img src={personfill} />
                <img src={personfill} />
                <img src={personnofill} />
              </>
            ) : leg.crowdForecast === "HIGH" ? (
              <>
                <img src={personfill} />
                <img src={personfill} />
                <img src={personfill} />
              </>
            ) : leg.crowdForecast === "UNKNOWN" ? (
              <>
                <img src={personfill} />?
              </>
            ) : null}
          </div>
        </TripInfo>

        <EndStation>
          <Time>{time2}</Time>

          <StationName>{leg.destination.name}</StationName>
          <Track>Spoor {leg.destination.plannedTrack}</Track>
          {/* <p>Zijde {leg.destination.exitSide}</p> */}
        </EndStation>
      </Trip>
      {/* <p>{leg.cancelled}</p> */}
      {/* <p>{leg.plannedDurationInMinutes} minutes</p> */}
      <br></br>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  flex-direction: column;
  width: 600px;


  .vl {
    border-left: 2px solid purple;
    height: 180px;
    position: absolute;
  }
`;

const Time = styled.p`
  line-height: 45px;
  border-right: 1px solid white;
`;
const StationName = styled.p`
  font-size: 3rem;
  margin-left: 10px;
`;
const Track = styled.p`
  line-height: 45px;
`;

const Trip = styled.div`
  border-bottom: 1px solid white;
`;

const StartStation = styled.div`
  display: grid;
  // width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid white;
  grid-template-columns: 50px 490px 200px;

  .stationname {
    font-size: 3rem;
    margin-left: 10px;
  }
`;

const Train = styled.div`
margin-left: 10px;`;

const EndStation = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-evenly;
  // border-bottom: 1px solid white;
  grid-template-columns: 50px 490px 200px;

  .stationname {
    font-size: 3rem;
    margin-left: 10px;
  }
`;
const TripInfo = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-evenly;
  // border-bottom: 1px solid white;
  grid-template-columns: 50px 490px 200px;
  align-items: center;
  height: 60px;

  .stationname {
    font-size: 3rem;
  }
`;
