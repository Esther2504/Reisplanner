import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Leg from './Leg';

export default function Trips( {start, end} ) {
    const [routes, setRoutes] = useState([]);
    const [isLoaded, setLoaded] = useState(false)


    const APIKEY = "process.env.REACT_APP_API_KEY"

    useEffect(() => {
      fetch(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?lang=nl&fromStation=${start}&toStation=${end}&originWalk=false&originBike=false&originCar=false&destinationWalk=false&destinationBike=false&destinationCar=false&dateTime=2022-11-23T17:15:00&shorterChange=false&searchForAccessibleTrip=false&localTrainsOnly=false&excludeHighSpeedTrains=false&excludeTrainsWithReservationRequired=false&yearCard=false&travelRequestType=DEFAULT`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          "Ocp-Apim-Subscription-Key": "f37c0dc4e1284e3495188b7c255ff626",
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
    <>
            {isLoaded ? (
        routes.trips.map((trip) => {
            return (
              <TripCard>
            {/* Legs mappenn */}
            <div>
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
    </>
  )
}


const TripCard = styled.div`
  background-color: #3a415e;
  color: white;
  width: 100%;
  margin: 50px auto;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  justify-content: space-between;

  p {
    color: white;
  }
`;