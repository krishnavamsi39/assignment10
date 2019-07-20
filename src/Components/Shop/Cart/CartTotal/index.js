import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class CartTotal extends Component {
  render() {
    return (
      <div class="cart-footer">
        <span class="footer-heading">SUBTOTAL</span>
        <span class="total-price">${this.props.cartStore.total} </span>
      </div>
    );
  }
}
export default CartTotal;
