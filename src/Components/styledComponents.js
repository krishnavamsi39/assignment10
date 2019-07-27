import styled, { keyframes } from "styled-components";

export const Input = styled.input`
  width: 220px;
  background: #ffffff;
  padding: 7px 14px;
  margin: 0px 0px 20px;
`;
export const Div = styled.div`
  position: absolute;
  top: 10%;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  box-shadow: 2px 2px 2px 2px #ccc;
`;
export const Span = styled.span`
  position: relative;
  text-align: center;
`;
export const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  width: 250px;
  font-size: 20px;
`;
export const H2 = styled.h2`
  position: relative;
  text-align: center;
`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Message = styled(Span)`
  position: absolute;
  top: 50px;
  left: 750px;
  color: green;
`;
export const FailureMessage = styled(Span)`
  position: absolute;
  top: 50px;
  left: 750px;
  color: red;
`;
export const Loader = styled.div`
  position: relative;
  bottom: 120px;
  right: 60px;
  border: 4px solid white;
  border-radius: 50%;
  border-top: 4px solid black;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;
