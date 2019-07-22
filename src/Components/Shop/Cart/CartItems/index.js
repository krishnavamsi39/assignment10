import React, { Component } from "react";
import { observer } from "mobx-react";
import EachCartItem from "./EachCartItem";
@observer
class CartItems extends Component {
  renderCartItems = () => {
    const { shopStore } = this.props;

    const cartIds = [...shopStore.cartStore.cartMap.keys()];

    const rows = cartIds.map(cartItem => {
      return (
        <EachCartItem
          cartItem={cartItem}
          shopStore={shopStore}
          key={cartItem}
        />
      );
    });
    return rows;
  };
  render() {
    return <>{this.renderCartItems()}</>;
  }
}
export default CartItems;
