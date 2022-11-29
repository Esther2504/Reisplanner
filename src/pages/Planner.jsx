import React from "react";
import MyPlanner from "../components/planner/MyPlanner";
import styled from "styled-components";

const Planner = () => {
  return (

      <MyPlanner />

  );
};

export default Planner;

const MainContainer = styled.main`

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`;
