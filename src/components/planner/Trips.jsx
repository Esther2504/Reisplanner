import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Leg from './Leg';
import TripsTime from './TripsTime';

export default function Trips( {start, end, datetime} ) {
    const [routes, setRoutes] = useState([]);
    const [isLoaded, setLoaded] = useState(false)


    const APIKEY = ""

    useEffect(() => {
      fetch(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?lang=nl&fromStation=${start}&toStation=${end}&originWalk=false&originBike=false&originCar=false&destinationWalk=false&destinationBike=false&destinationCar=false&dateTime=${datetime}&shorterChange=false&searchForAccessibleTrip=false&localTrainsOnly=false&excludeHighSpeedTrains=false&excludeTrainsWithReservationRequired=false&yearCard=false&travelRequestType=DEFAULT`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          "Ocp-Apim-Subscription-Key": APIKEY,
        }
      })
        .then((res) => res.json())
        .then((data) => {
          
          setRoutes(data)
    setLoaded(true)
        });
       ;
    }, []);
  
    console.log(routes)
    console.log(start)


  return (
    // <TripCard>
    <Wrapper>
            {isLoaded ? (
        routes.trips.map((trip) => {
            return (
              <TripCard>
            {/* if state is true, show legs. in apart component zetten */}
            <div>
            <TripsTime origin={trip.legs[0].origin.plannedDateTime} destination={trip.legs[(trip.legs).length - 1].destination.plannedDateTime} />
            <p>{trip.plannedDurationInMinutes} minuten</p>
            <p>{trip.transfers}x overstappen</p>
            </div>
            <div>
           
            {trip.legs.map((leg) => {
                return (
                    <Leg leg={leg} />
                )
            })}
            </div>
            </TripCard>
            )
        })
      )
        : null}
    {/* // </TripCard> */}
    </Wrapper>
  )
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;

`

const TripCard = styled.div`
  background-color: #3a415e;
  color: white;
  width: 100%;
  margin: 0 20px 10px 0;
  border-radius: 8px;
  padding: 15px;
  display: flex;

  justify-content: space-between;
  overflow-x: hidden;
  align-self: right;

  p {
    color: white;
  }
`;