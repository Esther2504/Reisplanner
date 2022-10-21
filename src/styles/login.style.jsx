import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #7e60fa; */
  border: 1px solid yellow;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;

  h1,
  h2 {
    margin-bottom: 0;
    /* margin: 0 auto; */
    /* padding: 5px; */
    text-align: center;
  }

  h1 {
    @media only screen and (max-width: 500px) {
      font-size: 4rem;
    }
  }

  h2 {
    @media only screen and (max-width: 500px) {
      font-size: 2.75rem;
    }
  }
`;

export const LoginCard = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    background-color: transparent;
    padding: 0;
  }

  h3,
  p {
    padding: 5px;
  }
`;

export const Form = styled.form`
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 10px auto;
  padding: 10px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }

  label {
    color: #3a415e;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 10px 0;
    padding: 10px;
    font-size: 1.55rem;
    @media only screen and (max-width: 500px) {
      padding: 5px;
    }

    input[type="email"] {
      padding: 8px;
      margin-top: 5px;
      border: none;
      border-bottom: solid 1px #3a415e;
      @media only screen and (max-width: 500px) {
        width: 100%;
      }

      &:focus {
        outline: none;
        border: solid 1px #3a415e;
        background-color: #e3dff7;
      }
    }
  }

  button {
    padding: 15px;
    margin: 10px;
    font-size: 1.65rem;
    font-weight: bold;
    border: none;
    color: #ffffff;
    background-color: #7e60fa;
    border-radius: 8px;
    @media only screen and (max-width: 500px) {
      margin: 5px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
