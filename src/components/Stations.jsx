import React from 'react'
import styled from 'styled-components';
import { X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Stations( {data} ) {
  return (
    <>
    {data.map((station) => {
          return (
            <StationWrapper key={station.UICcode}>
              <StationName>
                <h1> {station.naam} | {station.code} </h1>
                <p>{station.land}</p>
              </StationName>
              <StationFacilities>
                <p>
                  {station.heeftFaciliteiten === false ? (
                    <X color="red" />
                  ) : (
                    <ChevronDown color="green" />
                  )}
                  Faciliteiten
                </p>
                <p>
                  {station.heeftFaciliteiten === false ? (
                    <X color="red" />
                  ) : (
                    <ChevronDown color="green" />
                  )}
                  Vertrektijden
                </p>
                <p>
                  {!station.heeftFaciliteiten === false ? (
                    <X color="red" />
                  ) : (
                    <ChevronDown color="green" />
                  )}
                  Reisassistentie
                </p>
              </StationFacilities>
              <Link to="/station">
                <button>Zie Routes</button>
              </Link>
            </StationWrapper>
          );
        })}
    </>
  )
}


const StationWrapper = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  background-color: white;
  margin: 15px auto;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  padding: 5px;

  button {
    width: 100px;
    height: 40px;
    background-color: #7e60fa;
    border-style: none;
    color: white;
    border-radius: 8px;
    font-size: 1.4rem;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: 100%;
    text-align: center;
  }
`;

const StationName = styled.div`
  width: 40%;

  h1 {
    font-size: 1.8rem;
    margin-top: -1rem;
    padding: 0;
  }

  p {
    margin-top: -1rem;
  }
`;

const StationFacilities = styled.div`
  width: 40%;

  p {
    font-size: 1.3rem;
    display: flex;
  }

  @media screen and (max-width: 700px) {
    margin: 20px;
    text-align: center;
  }
`;

