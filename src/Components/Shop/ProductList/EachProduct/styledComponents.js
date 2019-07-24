import styled from "styled-components";
export const ItemDiv = styled.div`
  width: 350px;
  height: 650px;
  position: relative;
  left: 220px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  --v: black;
  :hover {
    border: 1px solid;
    --v: #ffdb58;
  }
`;
export const Button = styled.button`
  background-color: var(--v);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  bottom: 0px;
  position: absolute;
  width: 250px;
  font-size: 20px;
`;
export const FreeShip = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: black;
  width: 100px;
  height: 25px;
  color: white;
  text-align: center;
  font-size: 12px;
`;
export const Span = styled.span``;
export const Image = styled.img``;
export const P = styled.p``;
