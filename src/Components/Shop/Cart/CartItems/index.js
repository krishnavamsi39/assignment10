import React, { Component } from "react";
import { observer } from "mobx-react";
import EachCartItem from "./EachCartItem";
@observer
class CartItems extends Component {
  renderCartItems = () => {
    const { shopStore } = this.props;
    console.log(shopStore);
    const a = [...shopStore.cartStore.cartMap.keys()];

    const rows = a.map(cartItem => {
      return <EachCartItem cartItem={cartItem} shopStore={shopStore} />;
    });
    return rows;
  };
  render() {
    return <>{this.renderCartItems()}</>;
  }
}
export default CartItems;
