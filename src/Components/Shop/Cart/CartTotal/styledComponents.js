import styled from "styled-components";
export const CartFooter = styled.div`
  display: flex;
  height: 200px;
  justify-content: space-around;
  border: 1px solid black;
`;
export const FooterHeading = styled.span`
  color: grey;
  font: 22px;
  position: relative;

  top: 30px;
`;
export const CheckOut = styled.button`
  position: relative;
  top: 70px;
  left: 100px;
  background-color: black;
  height: 60px;
  width: 200px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 20px;
`;
export const Total = styled.span`
  color: yellow;
  font-size: 24px;
  position: relative;

  top: 30px;
  left: 180px;
`;
export const Installment = styled.span`
  color: grey;
  position: relative;
  top: 70px;
  right: 20px;
`;
export const EmptyCart = styled.span`
  font-size: 30px;
  text-align: center;
`;
