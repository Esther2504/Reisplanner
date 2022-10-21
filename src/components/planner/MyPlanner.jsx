import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyPlanner = () => {

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault(),
      setTimeout(() => {
        navigate("/Profile");
      }, 100);
  };

  return (
    <Form type="submit">
      {/* <InputContainer> */}
      <MyLabel>
        <Label>Van</Label>
        <Input type="text" placeholder="Station" />
      </MyLabel>
      <MyLabel>
        <Label>Naar</Label>
        <Input type="text" placeholder="Station" />
      </MyLabel>
      {/* </InputContainer> */}
      <ButtonContainer>
      <Button onClick={handleBack}>Terug</Button>
      <Button>Plan mijn reis</Button>
        
      </ButtonContainer>
    </Form>
  );
};

export default MyPlanner;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background-color: #3a415e;
  height: 250px;
  align-items: center;
  border-radius: 8px;
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
