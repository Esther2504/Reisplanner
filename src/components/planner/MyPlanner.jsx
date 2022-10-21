import React from "react";
import styled from "styled-components";

const MyPlanner = () => {
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
      <Button>Plan mijn reis</Button>
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
