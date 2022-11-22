import React, { useState } from "react";
import styled from "styled-components";
import { X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Stations({ data }) {
  const [stationName, setStationName] = useState();
  const [stationCode, setStationCode] = useState();
  const [stationFacilities, setStationFacilities] = useState();
  const [stationTimes, setStationTimes] = useState();
  const [stationAssistance, setStationAssistance] = useState();

  // console.log(data.payload)



console.log(data)

  let filteredData = data;
  if (stationName) {
    filteredData = data.filter((station) => station.namen.lang === stationName);
  }
  if (stationCode) {
    document.getElementById("stationname").value = "";
    filteredData = data.filter((station) => station.code === stationCode);
  }
  if (stationFacilities) {
    filteredData = filteredData.filter(
      (station) => station.heeftFaciliteiten === true
    );
  }
  if (stationTimes) {
    filteredData = filteredData.filter(
      (station) => station.heeftVertrektijden === true
    );
  }
  if (stationAssistance) {
    filteredData = filteredData.filter(
      (station) => station.heeftReisassistentie === true
    );
  }

  const handleFacilitiesFilter = () => {
    if (stationFacilities === true) {
      setStationFacilities();
    } else if (!stationFacilities) {
      setStationFacilities(true);
    }
  };

  const handleTimesFilter = () => {
    if (stationTimes === true) {
      setStationTimes();
    } else if (!stationTimes) {
      setStationTimes(true);
    }
  };

  const handleAssistanceFilter = () => {
    if (stationAssistance === true) {
      setStationAssistance();
    } else if (!stationAssistance) {
      setStationAssistance(true);
    }
  };

  const removeFilters = () => {
    setStationCode();
    setStationName();
    setStationCode();
    setStationFacilities();
    setStationTimes();
    setStationAssistance();
    document.getElementById("facilities").checked = false;
    document.getElementById("times").checked = false;
    document.getElementById("assistance").checked = false;
    document.getElementById("stationname").value = "";
    document.getElementById("stationcode").value = "";
  };

  return (
    <>
      <StationFilter>
        <select
          id="stationname"
          onChange={(e) => setStationName(e.target.value)}
        >
          <option value=""> Selecteer op naam</option>
          {data.map((station) => {
            return (
              <option style={{ color: "black" }} value={station.namen.lang}>
                {station.namen.lang}
              </option>
            );
          })}
        </select>
        <select
          id="stationcode"
          onChange={(e) => setStationCode(e.target.value)}
        >
          <option value=""> Selecteer op code </option>
          {data.map((station) => {
            return (
              <option style={{ color: "black" }} value={station.code}>
                {station.code}
              </option>
            );
          })}
        </select>
        
        <input
          id="facilities"
          type="checkbox"
          onChange={handleFacilitiesFilter}
        />{" "}
        <p>Faciliteiten</p>
        <input id="times" type="checkbox" onChange={handleTimesFilter} />{" "}
        <p>Vertrektijden</p>
        <input
          id="assistance"
          type="checkbox"
          onChange={handleAssistanceFilter}
        />{" "}
        <p>Reisassistentie</p>
        
        <button onClick={removeFilters}>Verwijder filters</button>
      </StationFilter>
      {filteredData.map((station) => {
        return (
          <StationWrapper key={station.UICcode}>
            <StationName>
              <h1>
                {" "}
                {station.namen.lang} | {station.code}{" "}
              </h1>
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
                {station.heeftVertrektijden === false ? (
                  <X color="red" />
                ) : (
                  <ChevronDown color="green" />
                )}
                Vertrektijden
              </p>
              <p>
                {station.heeftReisassistentie === false ? (
                  <X color="red" />
                ) : (
                  <ChevronDown color="green" />
                )}
                Reisassistentie
              </p>
            </StationFacilities>
            <Link to={`/${station.code}`}>
              <button>Zie Routes</button>
            </Link>
          </StationWrapper>
        );
      })}
    </>
  );
}

const StationFilter = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  gap: 20px;

  p {
    color: white;
    font-size: 1rem;
    margin-left: -1.5rem;
    line-height: 2rem;
  }

  button {
    background-color: white;
    border-style: none;
    border-radius: 2px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;

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
