import styled from "styled-components";
export const CartBox = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
`;
export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: black;
  text-align: center;
  position: relative;
  top: 30px;
  right: 10px;
`;
export const Image = styled.img`
  position: relative;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;
export const DisplayCart = styled.div`
  width: 800px;
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.93);
  display: flex;
  color: white;
  flex-direction: column;
  transition: 2s;
  overflow: scroll;
`;
export const HideCart = styled.div`
  width: 0px;
  height: 1000px;
  background-color: black;
  transition: 2s;
  visibility: hidden;
`;
