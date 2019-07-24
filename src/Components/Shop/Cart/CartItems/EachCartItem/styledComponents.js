import styled from "styled-components";
export const CartItem = styled.div`
  display: flex;
  height: 200px;
  position: relative;
  border: 1px solid black;
  margin-top: 20px;
`;
export const ItemProperties = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 40px;
  top: 50px;
`;

export const ItemTitle = styled.span`
  color: white;
  font-size: 22px;
`;
export const StrikeTitle = styled(ItemTitle)`
  text-decoration: line-through;
`;
export const ItemPrice = styled.span`
  color: yellow;
  position: absolute;
  top: 60px;
  right: 60px;
  font-size: 20px;
`;
export const StrikePrice = styled(ItemPrice)`
  text-decoration: line-through;
`;
export const DeleteIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;
`;
export const Span = styled.span`
  color: grey;
`;
export const Strike = styled(Span)`
  text-decoration: line-through;
`;
export const Image = styled.img`
  position: relative;
  top: 10px;
  left: 20px;
`;
