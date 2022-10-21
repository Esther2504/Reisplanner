import styled from "styled-components";

export const Container = styled.div`
    background-color: #3A415e;
    color: #ffffff;
    height: 100vh;
    display: flex;
    flex-direction: column;

    h1, h2, p{
    color: #ffffff;
    }
`;

export const Wrapper = styled.div`
    // background-color: blue;
    display: flex;
    flex-direction:row;
    justify-content: space-between;

    button{
        width: 200px;
        // margin: auto;
        padding: 10px;
        margin: 10px;
        font-size: 1.25rem;
        font-weight: bold;
        border: none;
        // color: #ffffff;
        
        // background-color:#3a415e;
        @media only screen and (max-width: 500px){
            margin: 5px;
         }

         &:hover{
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