import React, { Component } from "react";
import { CartHead, CartCount, Image, Span } from "./styledComponents";
import { observer } from "mobx-react";
@observer
class CartHeader extends Component {
  render() {
    return (
      <CartHead>
        <Image
          src="assets/images.png"
          height="40px"
          onClick={this.handleClick}
        />
        <CartCount> {this.props.shopStore.cartStore.cartCount}</CartCount>
        <Span>Cart</Span>
      </CartHead>
    );
  }
}
export default CartHeader;
