import React, { Component } from "react";

import { ItemDiv, Button, FreeShip, Span, Image, P } from "./styledComponents";
import { observer } from "mobx-react";
@observer
class EachProduct extends Component {
  handleClick = () => {
    const { id } = this.props;
    this.props.shopStore.cartStore.addToCart(id);
  };
  installmentPrice = () => {
    const { price, installments } = this.props;
    return (price / installments).toFixed(2);
  };
  render() {
    const {
      title,
      price,
      currencyFormat,
      installments,
      image,
      isFreeShipping
    } = this.props;
    return (
      <ItemDiv>
        {isFreeShipping ? <FreeShip>Free Shipping</FreeShip> : <></>}
        <Image src={image} />
        <P>{title}</P>
        <Span>
          {currencyFormat}
          {price}
        </Span>
        {installments > 1 ? (
          <Span>
            or {installments}x${this.installmentPrice()}
          </Span>
        ) : (
          <></>
        )}
        <Button onClick={this.handleClick}>Add to cart</Button>
      </ItemDiv>
    );
  }
}
export default EachProduct;
