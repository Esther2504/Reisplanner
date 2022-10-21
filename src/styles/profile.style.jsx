import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: #3a415e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem;

  h1,
  h2,
  p {
    color: #3a415e;
    margin-bottom: 2rem;
  }
`;

export const MainContainer = styled.div`
  /* border: 1px solid #7e60fa; */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Button = styled.button`
  justify-self: flex-start;
  background-color: #7e60fa;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: #fff;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  /* margin-top: 4rem; */

  height: 200px;
`;
export const Wrapper = styled.div`
  // background-color: blue;
  display: flex;
  justify-content: space-between;

  button {
    width: 200px;
    // margin: auto;
    padding: 10px;
    margin: 10px;
    font-size: 1.25rem;
    font-weight: bold;
    border: none;
    background-color: #fff;
    outline: 1px solid #3a415e;
    border-radius: 3px;
    color: #3a415e;
    align-self: flex-start;

    // background-color:#3a415e;
    @media only screen and (max-width: 500px) {
      margin: 5px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Welcome = styled.div`
  // border: solid 1px red;
  display: flex;
  flex-direction: column;
  width: 50%;
`;
