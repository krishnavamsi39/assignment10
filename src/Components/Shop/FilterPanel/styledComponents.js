import styled from "styled-components";
export const Filter = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 250px;
`;
export const Button = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgb(128, 128, 128);

  color: black;

  border: none;
  margin: 4px 4px;
  cursor: pointer;
`;
export const SelectedButton = styled(Button)`
  background-color: black;

  color: white;
`;
