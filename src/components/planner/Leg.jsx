import React from "react";
import styled from "styled-components";

export default function Leg({ leg }) {
  const today = new Date(leg.origin.plannedDateTime);
  const time = today.toLocaleTimeString("nl-NL").slice(0, 5);
  const today2 = new Date(leg.destination.plannedDateTime);
  const time2 = today2.toLocaleTimeString("nl-NL").slice(0, 5);

  return (
    <Wrapper>
        
              <div class="vl"></div>
    <Trip>
      

        <StartStation>
        <p>{time}</p>
    
          <p className="stationname">{leg.origin.name}</p>
          <p>Spoor {leg.origin.plannedTrack}</p>
        </StartStation>
        <TripInfo>
       <p>hi</p>
            <Train>   <p>{leg.product.displayName}</p>
          <p>Richting {leg.direction}</p></Train>
       

          {/* {leg.stops.map((stop) => {
            return <span>{stop.name}</span>
          })} */}
          <p>{leg.crowdForecast}</p>
        </TripInfo>
   

      
      <EndStation>
      <p>{time2}</p>
      <p className="stationname">{leg.destination.name}</p>
      <p>Spoor {leg.destination.plannedTrack}</p>
      {/* <p>Zijde {leg.destination.exitSide}</p> */}
      </EndStation>
      </Trip>
      {/* <p>{leg.cancelled}</p> */}
      {/* <p>{leg.plannedDurationInMinutes} minutes</p> */}
      ---
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 600px;

.vl {
    border-left: 2px solid purple;
    height: 180px;
    position: absolute;
  }
`

const Trip = styled.div`

`

const StartStation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .stationname {
    font-size: 3rem;
  }
`;

const Train = styled.div`

`

const EndStation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .stationname {
    font-size: 3rem;
  }
`;
const TripInfo = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;

  .stationname {
    font-size: 3rem;
  }
`;
