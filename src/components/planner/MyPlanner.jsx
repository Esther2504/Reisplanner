import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Trips from "./Trips";

const MyPlanner = () => {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [datetime, setDateTime] = useState();
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault(),
      setTimeout(() => {
        navigate("/Profile");
      }, 100);
  };

  console.log(datetime)

  return (
    <>

         {click ? 
         <MainContainer2>
         <Form2>
         {/* <InputContainer> */}
         <MyLabel>
           <Label>Van</Label>
           <Input type="text" placeholder="Station" onChange={(e) => setStart(e.target.value)} />
         </MyLabel>
         <MyLabel>
           <Label>Naar</Label>
           <Input type="text" placeholder="Station" onChange={(e) => setEnd(e.target.value)} />
         </MyLabel>
         <MyLabel>
           <Label>Tijd</Label>
           <Input type="datetime-local" onChange={(e) => setDateTime(e.target.value)} />
         </MyLabel>
         {/* </InputContainer> */}
         <ButtonContainer>
         <Button onClick={handleBack}>Terug</Button>
         <Button onClick={(e) => setClick(true)}>Plan mijn reis</Button>
         
         </ButtonContainer>
       </Form2>
         <Trips start={start} end={end} datetime={datetime} /> 
         </MainContainer2>
         :    
         <MainContainer>
          <Form>
         {/* <InputContainer> */}
         <MyLabel>
           <Label>Van</Label>
           <Input type="text" placeholder="Station" onChange={(e) => setStart(e.target.value)} />
         </MyLabel>
         <MyLabel>
           <Label>Naar</Label>
           <Input type="text" placeholder="Station" onChange={(e) => setEnd(e.target.value)} />
         </MyLabel>
         <MyLabel>
           <Label>Tijd</Label>
           <Input type="datetime-local" onChange={(e) => setDateTime(e.target.value)} />
         </MyLabel>
         {/* </InputContainer> */}
         <ButtonContainer>
         <Button onClick={handleBack}>Terug</Button>
         <Button onClick={(e) => setClick(true)}>Plan mijn reis</Button>
         
         </ButtonContainer>
       </Form>
       </MainContainer>
       }
         </>
  );
};

export default MyPlanner;

const MainContainer = styled.main`

  display: flex;
  flex-direction: column;
  // justify-content: center;
  // max-width: 800px;
  // min-height: 100vh;
  margin: auto 0;
`;
const MainContainer2 = styled.main`
display: flex;

`;


const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background-color: #3a415e;
  height: 250px;
  align-items: center;
`;

const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background-color: #3a415e;
  height: 350px;
  width: 450px;
  align-items: center;
  border-radius: 8px;
  align-self: left;
`;


const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
`;

const MyLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1.4rem;
  width: 200px;
  border-radius: 8px;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
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
