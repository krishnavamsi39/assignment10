import React, { Component } from "react";
import { observer } from "mobx-react";
import EachCartItem from "./EachCartItem";
@observer
class CartItems extends Component {
  renderCartItems = () => {
    const { shopStore, cartStore } = this.props;

    const a = [...cartStore.cartMap.keys()];

    const rows = a.map(cartItem => {
      return (
        <EachCartItem
          cartItem={cartItem}
          cartStore={cartStore}
          shopStore={shopStore}
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
