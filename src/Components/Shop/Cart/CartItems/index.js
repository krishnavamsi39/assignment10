import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class CartItems extends Component {
  renderCartItems = () => {
    console.log(this.props.cartStore.cartMap);
  };
  render() {
    return <>{this.renderCartItems()}</>;
  }
}
export default CartItems;
